import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";


//Passenger routes
import Layout from "../Layout/Layout";
import Home from "../Pages/Profile";

import Skill from "../Pages/Skills";
import Project from "../Pages/Project";
import About from "../Pages/About";
import Contact from "../Pages/Contact";





















const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
         
        </Route>
  
      </Routes>
    </div>
  );
};

export default Routers;
