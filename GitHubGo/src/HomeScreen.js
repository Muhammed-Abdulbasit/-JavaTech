import React from 'react';
import { useNavigate } from 'react-router-dom';

export const HomeScreen = () => {
 const navigate = useNavigate();


 return (
   <div>
     <h1>HomeScreen</h1>
     <button onClick={()=> {navigate("/SearchScreen");}}>Search</button>
   </div>
 );
};
