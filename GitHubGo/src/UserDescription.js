// UserDescription.js
import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import './UserDescription.css';

export const UserDescription = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Muhammed-Abdulbasit');
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          console.error('Failed to fetch user data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      <Header />
      <div className="userContainer">
        <h1 className="title">{userData ? userData.name : 'Loading...'}</h1>
        <div className="cardContainer">
          <div className="leftContainer">
            {userData && (
              <>
                <div className="programmerCard">
                  <h2>User Description</h2>
                  <p className="userText">{userData.bio || 'No description available'}</p>
                </div>
                <div className="activityCard">
                  <h2>User Activity</h2>
                  <p className="userText">
                    {`${userData.name} committed ${userData.public_repos} lines of code to ${userData.company || 'No company'}. Check out their recent activity on GitHub.`}
                  </p>
                  <hr />
                  <p className="userText">
                    {`In their latest commit, ${userData.name} made significant contributions, committing ${userData.public_gists} lines of code to another repository.`}
                  </p>
                </div>
              </>
            )}
          </div>
          <div className="rightContainer">
            <h2>Profile options</h2>
            <ul className="profileOptionsList">
              <li>Edit Profile</li>
              <li>Change Password</li>
              <li>Privacy Settings</li>
              <li>Change Profile Icon</li>
              <li>Linked Accounts</li>
              <li>Profile Visibility</li>
              <li>Notification Preferences</li>
              <li>Email Notifications</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

