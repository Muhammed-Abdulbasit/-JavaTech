import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomeScreen } from './HomeScreen';
import { UserDescription } from './UserDescription';
import { SearchScreen } from './SearchScreen';


export const AppRoutes = () => {
 return (
   <Router>
     <Routes>
       <Route path="/" element={<HomeScreen />} />
       <Route path="/SearchScreen" element={<SearchScreen />} />
       <Route path="/UserDescription" element={<UserDescription />} />
     </Routes>
   </Router>
 );
};
