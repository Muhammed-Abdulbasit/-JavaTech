import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export const Login = () => {
  const [formData, setFormData] = useState({
    code: '',
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

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Exchange the code for an access token
    const response = await axios.post('https://github.com/login/oauth/access_token', {
      client_id: 'e43509bd8930071520ba',
      client_secret: '577a132a53015a77087faa4405a0f785b5d6852e', // You need to add your GitHub OAuth app's client secret here
      code: formData.code,
    }, {
      headers: {
        'Accept': 'application/json'
      },
    });
  
    // The response will contain the access token
    const accessToken = response.data.access_token;
  
    // Use the access token to authenticate the user
    // ...
  
    // Redirect to the home page after successful login
    navigate('/Homescreen');
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
  <div>
  <label htmlFor="code">Code: </label>
  <input
    type="text"
    id="code"
    name="code"
    value={formData.code}
    onChange={handleChange}
    required
  />
</div>

</form>

      <p>
        Please login with your GitHub username and password
      </p>
      
    </div>
    
  );
};
