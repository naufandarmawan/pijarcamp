import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Home from './pages/Main/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ProfileTalent from './pages/Main/ProfileTalent';
import EditTalent from './pages/Main/EditTalent';
import HireTalent from './pages/Main/HireTalent';
import ProfileCompany from './pages/Main/ProfileCompany';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/talent/profile/:id" element={<ProfileTalent/>} />
        <Route path="/talent/profile/:id/edit" element={<EditTalent/>} />
        <Route path="/talent/profile/:id/hire" element={<HireTalent/>} />
        <Route path="/company/profile" element={<ProfileCompany/>} />
        <Route path="/company/profile/edit" element={<EditTalent/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App