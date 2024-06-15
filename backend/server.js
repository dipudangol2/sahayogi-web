import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import { User } from "./models/user.js";
import bodyParser from "body-parser";

const app = express();
const port = 5000;

// Ensure proper handling of async operations
(async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/users");
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
})();
const user1 = new User({
  email: "abc@gmail.com",
  password: "1234",
});
// user1
//   .save()
//   .then((doc) => {
//     console.log("Data Saved", doc);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
app.use(cors());
app.use(bodyParser.json());

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email, password: password });
    console.log(user);
    if (user) {
      res.json({ success: true });
    } else {
      res.json({ success: false, message: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
