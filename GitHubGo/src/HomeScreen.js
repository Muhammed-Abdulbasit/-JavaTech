import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import './HomeScreen.css';
import ProfileDropdown from './ProfileDropdown';
import profileIcon from './JavaTechLogo.png';


export const HomeScreen = () => {
 const navigate = useNavigate();
 const [isDropdownOpen, setIsDropdownOpen] = useState(false);

 const toggleDropdown = () => {
   setIsDropdownOpen(!isDropdownOpen);
 };

 return (
   <div>
    <div className='container'>
     <h1 className='title'>GitHub Go</h1>
     <button className ="searchScreenButton" onClick={()=> {navigate("/SearchScreen");}}>Search</button>
     <h2 className='previous-searches' > Previous Searches:</h2>
     </div>

     <div className='profile-icon' onClick={toggleDropdown}>
        {/* Your profile icon goes here */}
        <img src={profileIcon} alt='Profile Icon' />
        {isDropdownOpen && <ProfileDropdown />}
    </div>
   </div>
   
 );
};
