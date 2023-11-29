import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();
  const CLIENT_ID = 'e43509bd8930071520ba';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add authentication logic here (e.g., API call, validation, etc.)
    // For example, you might want to send formData to your backend server for authentication
    // If authentication is successful, redirect to the home page
    // navigate('/');
  };

  useEffect(() => {
    const querystring = window.location.search;
    const urlpara = new URLSearchParams(querystring);
    const codeparam = urlpara.get('code');
    console.log(codeparam);
    // You might want to send this codeparam to your backend server to exchange for an access token
  }, []);

  const loginWithGithub = () => {
    window.location.assign(`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`);
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
        <button type="button" onClick={loginWithGithub}>Login with GitHub</button>
      </form>
      <p>Please login with your GitHub username and password</p>
    </div>
  );
};
