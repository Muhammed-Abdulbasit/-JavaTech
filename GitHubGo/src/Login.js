import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { useEffect } from 'react';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add authentication logic here (e.g., API call, validation, etc.)
    // Redirect to the home page after successful login
    navigate('/');
  };

  useEffect(() => {
    const querystring = window.location.search;
    const urlpara = new URLSearchParams(querystring);
    const codeparam = urlpara.get('code');
    console.log(codeparam);
  }, []);

  function loginwithgithub(){
    window.location.assign("https://github.com/login/oauth/authorize?client_id="+CLIENT_ID);
  }
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

  <button onClick={loginwithgithub}>Login</button>
</form>

      <p>
        Please login with your GitHub username and password
      </p>
      
    </div>
  );
};

