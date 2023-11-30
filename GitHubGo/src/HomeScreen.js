import React from 'react';
import { useNavigate} from 'react-router-dom';
import {Header} from './Header';
import './HomeScreen.css';


export const HomeScreen = () => {
 const navigate = useNavigate();

 return (
   <div>
    <Header/>
    <div className='container'>
     <h1 className='title'>GitHub Go</h1>
     <button className ="searchScreenButton" onClick={()=> {navigate("/SearchScreen");}}>Search</button>
     <h2 className="slogan">Welcome to the number 1 repo tracker for GitHub!</h2>
     <h3 className='slogan'>Over 5000 repositories</h3>
     </div>
   </div>
   
 );
};
