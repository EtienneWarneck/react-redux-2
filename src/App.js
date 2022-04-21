import React from "react";
import HomePage from './HomePage';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import AboutPage from "./AboutPage"
import Header from "./Header"

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
