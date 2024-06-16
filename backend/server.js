import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import { User } from "./models/user.js";
import { Campaign } from "./models/campaign.js";
import { Expense } from "./models/expense.js";
import { Donation } from "./models/donation.js";
import session from "express-session";

import bodyParser from "body-parser";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 5000;
const store = new session.MemoryStore();

// Set up Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Specify the destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

// Ensure proper handling of async operations
(async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/users");
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
})();

app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(
  session({
    secret: "my-secret-key",
    cookie: { maxAge: 360000 },
    saveUninitialized: false,
    store,
  })
);
app.use((req, res, next) => {
  
  next();
});

app.get("/", (req, res) => {
  res.send("helloo");
});

app.post("/login", async (req, res) => {
  console.log(req.session.user);
  const { email, password } = req.body;
  if (req.session.authenticated) {
    console.log(req.session.authenticated);
    return res.json(req.session); // Use return to ensure no further execution
  } else {
    try {
      const user = await User.findOne({ email: email, password: password });
      console.log(user);
      if (user) {
        req.session.authenticated = true;
        req.session.user = {
          email,
          password,
        };
        return res.json({ success: true, session: req.session }); // Return response with session
      } else {
        return res.json({
          success: false,
          message: "Invalid email or password",
        });
      }
    } catch (error) {
      console.error("Error during login:", error);
      return res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  }
});

app.post("/signup", async (req, res) => {
  console.log(req.body);
  try {
    const newUser = new User(req.body);
    await newUser.save();
    console.log("User saved:", newUser);
    res.json({ success: true, message: "User registered successfully" });
  } catch (err) {
    console.error("Error during signup: " + err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      errcode: err.code,
    });
  }
});

app.post("/api/campaigns/create", upload.single("image"), async (req, res) => {
  const {  campaignName, description, goal } = req.body;
  console.log(req.sessionid)
  const userName = req.session
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : "";
  const startDate = new Date();
  const endDate = new Date(startDate.getTime() + 30 * 24 * 60 * 60 * 1000);

  if (!campaignName || !description || !goal || !imageUrl) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  try {
    const newCampaign = new Campaign({
      userName,
      campaignName,
      description,
      goal,
      imageUrl,
      createdAt: startDate,
      endsAt: endDate,
    });

    await newCampaign.save();

    res
      .status(201)
      .json({ success: true, message: "Campaign created successfully" });
  } catch (error) {
    console.error("Error creating campaign:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

app.get("/api/campaigns", async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.json(campaigns);
  } catch (error) {
    console.error("Error fetching campaigns:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
app.get("/api/campaign/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const campaign = await Campaign.findOne({ _id: id });
    if (!campaign) {
      return res.status(404).json({ message: "Campaign not found" });
    }
    res.json(campaign);
    console.log(campaign);
  } catch (error) {
    console.error("Error fetching Campaign:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Route to view the current balance(everyone)
app.get("/balance", async (req, res) => {
  try {
    const donations = await Donation.find();
    const expenses = await Expense.find();
    const totalDonations = donations.reduce(
      (acc, donation) => acc + donation.amount,
      0
    );
    const totalExpenses = expenses.reduce(
      (acc, expense) => acc + expense.amount,
      0
    );
    const balance = totalDonations - totalExpenses;
    res.json({ balance });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch balance" });
  }
});

// Route to view the total amount donated by all donors(everyone )
app.get("/donations/total", async (req, res) => {
  try {
    const donations = await Donation.find();
    const totalDonations = donations.reduce(
      (acc, donation) => acc + donation.amount,
      0
    );
    res.json({ totalDonations });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch donations" });
  }
});

// Route to add a donation (only admin)
app.post("/donations", async (req, res) => {
  try {
    const { donor, amount } = req.body;
    if (typeof donor !== "string" || typeof amount !== "number") {
      return res.status(400).json({ error: "Invalid donation data" });
    }
    const donation = new Donation({ donor, amount });
    await donation.save();
    res.status(201).json(donation);
  } catch (err) {
    res.status(500).json({ error: "Failed to add donation" });
  }
});

// Route to view total expenditures(everyone)
app.get("/expenses/total", async (req, res) => {
  try {
    const expenses = await Expense.find();
    const totalExpenses = expenses.reduce(
      (acc, expense) => acc + expense.amount,
      0
    );
    res.json({ totalExpenses });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch total expenditures" });
  }
});

// Route to view all the expenditures made (everyone)
app.get("/expenses", async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch expenses" });
  }
});

// Route to add an expense (Admin only)
app.post("/expenses", async (req, res) => {
  try {
    const { description, amount, category, date, detailedDescription } =
      req.body;
    if (
      typeof description !== "string" ||
      typeof amount !== "number" ||
      typeof category !== "string"
    ) {
      return res.status(400).json({ error: "Invalid expense data" });
    }
    const expense = new Expense({
      description,
      amount,
      category,
      date,
      detailedDescription,
    });
    await expense.save();
    res.status(201).json(expense);
  } catch (err) {
    res.status(500).json({ error: "Failed to add expense" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
