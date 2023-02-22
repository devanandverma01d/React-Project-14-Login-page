import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import AdminDashboard from "./pages/admin/AdminDashboard";
import EndUserDashboard from './pages/enduser/EndUserDashboard';
import ResellerDashboard from './pages/reseller/ResellerDashboard';
import AccounManagerDashboard from './pages/accountmanager/AccounManagerDashboard';


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="admindashboard" element={<AdminDashboard />}></Route>
            <Route path="enduserdashboard" element={<EndUserDashboard />}></Route>
            <Route path="resellerdashboard" element={<ResellerDashboard />}></Route>
            <Route path="accountmanagerdashboard" element={<AccounManagerDashboard />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
