import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./layout/NavBar";
import Hero from "./components/Hero";
import PortFolio from "./components/PortFolio";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Expertise from "./components/Expertise";
import Footer from "./layout/Footer";
import Error from "./components/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<><NavBar /><Footer/></>}>
            <Route path="/" element={<Hero />} />
            <Route path="/Portfolio" element={<PortFolio />} />
            <Route path="/About" element={<About />} />
            <Route path="/Testimonial" element={<Testimonial />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Expertise" element={<Expertise/>} />
          </Route>
          <Route path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
