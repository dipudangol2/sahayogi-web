import { useState } from "react";
import './signup.css';

import person_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'
import country_icon from '../assets/country.png'
import zip_icon from '../assets/zip.png'

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    contact: '',
    country: '',
    zip: '',

  });
  const [action, setAction] = useState("Sign Up");
  const [fullName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [error, setError] = useState(null);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {

      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
          contact: formData.contact,
          country: formData.country,
          zip: formData.zip,
          balance: 0
        }),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Signup successful');
        console.log('Form submitted:', formData);
      } else {
        alert('Signup failed: ' + data.message);
      }
    }
    catch (error) {
      alert("Signup failed " + error.message);
    }

  };


  return (
    <div className='container1'>
      <form onSubmit={handleSubmit}>
        <div className='header1'>
          <div className='text'>{action}</div>
        </div>

        <div className="inputs">
          <div className="input">
            <img src={person_icon} alt="" />
            <input
              type="text"
              name="fullName"
              placeholder='fullName'
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="email"
              name="email"
              placeholder='Email ID'
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="input">
            <img src={password_icon} alt="" />
            <input
              type="password"
              name="password"
              placeholder='Password'
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input
              type="password"
              name="confirmPassword"
              placeholder='Confirm Password'
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="number"
              placeholder='Contact Number'
              name="contact"
              value={formData.contact}
              onChange={handleChange}
            />
          </div>

          <div className="input">
            <img src={country_icon} alt="" />
            <input
              type="text"
              name="country"
              placeholder='Country'
              value={formData.country}
              onChange={handleChange}
            />
          </div>

          <div className="input">
            <img src={zip_icon} alt="" />
            <input
              type="text"
              name="zip"
              pattern="[0-9]{5}"
              inputMode="numeric"
              placeholder='Zip'
              value={formData.zip}
              onChange={handleChange}
            />
          </div>

          {error && <div className="error">{error}</div>}
        </div>

        <div className="submit-container1">
          <button type="submit" className="submit">
            {action}
          </button>
        </div>
      </form>
    </div>
  )
};

export default Signup;
