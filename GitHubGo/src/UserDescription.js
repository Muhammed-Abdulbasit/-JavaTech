// UserDescription.js
import React from 'react';
import { Header } from './Header';
import './UserDescription.css'; 

export const UserDescription = () => {
  return (
    <div>
      <Header/>
      <div className="userContainer">
        <h1 className="title">Username</h1>
        <div className="cardContainer">
          <div className="leftContainer">
          <div className="programmerCard">
            <h2>User Description</h2>
            <p className="userText">
              Programmersyed is a senior developer at Microsoft with years of experience in software development. He specializes in creating innovative solutions and is passionate about coding, problem-solving, and staying up-to-date with the latest technologies.
            </p>
          </div>
          <div className="activityCard">
            <h2>User Activity</h2>
            <p className="userText">
              Programmersyed committed 36 lines of code to Bing. Check out their recent activity on GitHub.
            </p>
            <hr />
            <p className="userText">
              In their latest commit, Programmersyed made significant contributions, committing 100 lines of code to another repository.
            </p>
            </div>
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
