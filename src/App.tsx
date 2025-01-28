import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import MainLayout from './components/MainLayout';

function App(){
  return(
    <Router>
    <Routes>
      <Route path="/signin" element={<SignIn title="Sign In" />} />
      <Route path="/" element={<MainLayout />} />
    </Routes>
  </Router>
  );
}
export default App;