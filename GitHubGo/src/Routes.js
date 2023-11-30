import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomeScreen } from './HomeScreen';
import { UserDescription } from './UserDescription';
import { SearchScreen } from './SearchScreen';
import { Login } from './Login';



export const AppRoutes = () => {
 return (
   <Router>
     <Routes>
       <Route path="/" element={<Login />} />
       <Route path="/HomeScreen" element={<HomeScreen />} />
       <Route path="/SearchScreen" element={<SearchScreen />} />
       <Route path="/UserDescription" element={<UserDescription />} />
       
     </Routes>
   </Router>
 );
};
