import React, { useState } from 'react';
import './Register.css'; // Import your CSS file
import{BrowserRouter,Routes,Route,Redirect} from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = () => {
    // You can add your registration logic here
    console.log('Name:', formData.name);
    console.log('Email Address:', formData.email);
    console.log('Phone Number:', formData.phone);
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <button
          type="button"
          className="submit-button"
          onClick={handleRegister}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;