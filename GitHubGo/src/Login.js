import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add authentication logic here (e.g., API call, validation, etc.)
    // Redirect to the home page after successful login
    navigate('/');
  };

  return (
  <div className="login-container">
    <div className="title">
      <h1>GitHub Go</h1>
    </div>
      <h2 className="second-title">Login</h2>
      <form onSubmit={handleSubmit}>
  <div>
    <label htmlFor="username">Username: </label>
    <input
      type="text"
      id="username"
      name="username"
      value={formData.username}
      onChange={handleChange}
      required
    />
  </div>

  <div>
    <label htmlFor="password">Password: </label>
    <input
      type="password"
      id="password"
      name="password"
      value={formData.password}
      onChange={handleChange}
      required
    />
  </div>

  <button type="submit">Login</button>
</form>

      <p>
        Please login with your GitHub username and password
      </p>
      
    </div>
  );
};
