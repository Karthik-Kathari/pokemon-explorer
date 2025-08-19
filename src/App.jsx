import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Category from "./pages/Category";
import Navbar from "./components/Navbar";
import About from "./pages/About";

// ✅ Set basename dynamically based on environment
const isProd = import.meta.env.MODE === "production";
const basename = isProd ? "/pokemon-explorer" : "/";

export default function App() {
  return (
    <Router basename={basename}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
