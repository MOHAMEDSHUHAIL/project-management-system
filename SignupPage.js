import React, { useState } from 'react';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup Data:', formData);
  };

  return (
   

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', width: '70%', padding: '10px', borderRadius: '8px', background: 'grey' }}>
        
      <h2><center> Sign up</center></h2>
        <label>
          First Name:<center>
          
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          /></center>
        </label>

        <br />

        <label>
          Last Name:<center>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          /></center>
        </label>

        <br />

        <label>
          Email:<center>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          /></center>
        </label>

        <br />

        <label>
          Create Password:<center>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          /></center>
        </label>

        <br />

        <label>
          Confirm Password:<center>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          /></center>
        </label>

        <br />

        <label>
          Phone Number:<center>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          /></center>
        </label>

        <br />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;
