import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profileIcon from './JavaTechLogo.png';
import ProfileDropdown from './ProfileDropdown';
import './Header.css';

export const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className="black-background"></div>
      <div className="header">
        <Link to="/HomeScreen">GitHub Go</Link>
      </div>
      
      <div className="profile-icon" onClick={toggleDropdown}>
        <img src={profileIcon} alt='Profile Icon' />
        {isDropdownOpen && <ProfileDropdown />}
      </div>
    </div>
  );
};
