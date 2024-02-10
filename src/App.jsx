import React from "react";
// CSS
import "./App.css";
// react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import { ContactPage, CourseList, Dashboard, Details } from "./pages";
// components
import { Footer, Navbar } from "./components";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/courseDetail/:courseId" element={<Details />} />
          <Route path="/courseList" element={<CourseList />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
