import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Home from './pages/Main/Home';
import Login from './pages/Auth/Login';
import ProfileTalent from './pages/Main/ProfileTalent';
import EditTalent from './pages/Main/EditTalent';
import HireTalent from './pages/Main/HireTalent';
import ProfileCompany from './pages/Main/ProfileCompany';
import ResetPassword from './pages/Auth/ResetPassword';
import RegisterTalent from './pages/Auth/RegisterTalent';
import RegisterRecruiter from './pages/Auth/RegisterRecruiter';
import EditCompany from './pages/Main/EditCompany';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register-talent" element={<RegisterTalent/>} />
        <Route path="/register-recruiter" element={<RegisterRecruiter/>} />
        <Route path="/resetpassword" element={<ResetPassword/>} />
        <Route path="/talent" element={<Home/>} />
        <Route path="/talent/profile/:id" element={<ProfileTalent/>} />
        <Route path="/talent/profile/:id/edit" element={<EditTalent/>} />
        <Route path="/talent/profile/:id/hire" element={<HireTalent/>} />
        <Route path="/company/profile" element={<ProfileCompany/>} />
        <Route path="/company/profile/edit" element={<EditCompany/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App