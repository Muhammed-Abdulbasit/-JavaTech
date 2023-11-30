import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');

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

    // Check if the username is Muhammed-Abdulbasit
    if (formData.username === 'Muhammed-Abdulbasit') {
      // Redirect to the HomeScreen
      navigate('/HomeScreen');
    } else {
      // Display an error message if the username is not Muhammed-Abdulbasit
      setError('Username is not registered in the database. Access denied.');
    }
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

      {error && <p className="error-message">{error}</p>}

      <p>Please login with your GitHub username and password</p>
    </div>
  );
};