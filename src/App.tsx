import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import MainLayout from './components/MainLayout';
import Register from './components/Register';
function App(){
  return(
    <Router>
    <Routes>
      <Route path="/signin" element={<SignIn title="Sign In" />} />
      <Route path="/" element={<MainLayout />} />
      <Route path="/register" element={<Register/>}/>
    </Routes>
  </Router>
  );
}
export default App;