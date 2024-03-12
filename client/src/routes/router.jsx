import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import LoginPage from "../Pages/Loginpage";
import HomeLogin from "../Pages/HomeLogin";
import Registerpage from "../Pages/Registerpage";
import Donationpage from "../Pages/Donationpage";

const router = (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Loginpage" element={<LoginPage />} />
      <Route path="/HomeLogin" element={<HomeLogin />} />
      <Route path="/Registerpage" element={<Registerpage />} />
      <Route path="/HomeLogin" element={<HomeLogin />} />
      <Route path="/Donationpage" element={<Donationpage />} />
    </Routes>
  </Router>
);

export default router;