// src/App.jsx
import { Routes, Route } from "react-router-dom";
import React from "react";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import Pricing from "./pages/Pricing";
import Support from "./pages/Support";
import Features from "./pages/Features";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}> {/* Layout includes your existing Navbar with updated logo */}
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
        <Route path="/features" element={<Features />} />
      </Route>
    </Routes>
  );
};

export default App;
