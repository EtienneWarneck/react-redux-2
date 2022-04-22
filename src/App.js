import React from "react";
import HomePage from './HomePage';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import AboutPage from "./AboutPage"
import Header from "./Header"
import PageNotFound from "./PageNotFound";
import CoursesPage from "./Courses.js/CoursesPage";

function App() {
  return (
    <div className="container-fluid">

      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
