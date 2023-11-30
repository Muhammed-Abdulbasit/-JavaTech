// ProfileDropdown.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileDropdown.css';

const ProfileDropdown = () => {
  return (
    <div className="profile-dropdown">
      <Link to="/UserDescription">Profile</Link>
      <Link to="/">Logout</Link>
    </div>
  );
};

export default ProfileDropdown;
