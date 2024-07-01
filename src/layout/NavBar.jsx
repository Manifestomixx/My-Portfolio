import React, { useEffect, useState, useRef } from "react";
import { Outlet, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../style/Navbar.css";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const navRef = useRef(null);

  const toggleHamburger = () => {
    setIsActive(!isActive);
  };

  const closeHamburger = ()=> {
    setIsActive(false);
  };

  useEffect(()=>{
    const handleScroll = ()=> {
      if (isActive) {
        closeHamburger();
      }
    }

    const handleClickOutside = ()=> {
      if (navRef.current && !navRef.current.contains(e.target)) {
        closeHamburger();
      }
    }

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };


  },[isActive]);

  return (
    <>
      <main className="container-fluid">
        <nav className="container d-flex justify-content-between align-items-center my-3">
          <div className="d-flex align-items-center">
            <img src={logo} alt="logo" className="logo-img" />
            <h2 className="mt-2 logo-text">JohnDev,</h2>
          </div>
          <div className={`navbar ${isActive ? "active" : ""}`}>
            <ul className={`list-unstyled d-flex gap-lg-5 mt-3 nav-menu ${isActive ? "active" : ""}`}>
              <NavLink to="/" className="text-decoration-none nav-text" onClick={closeHamburger}>
                <li>Home</li>
              </NavLink>
              <NavLink to="Portfolio" className="text-decoration-none nav-text" onClick={closeHamburger}>
                <li>Portfolio</li>
              </NavLink>
              <NavLink to="About" className="text-decoration-none nav-text" onClick={closeHamburger}>
                <li>About me</li>
              </NavLink>
              <NavLink to="Testimonial" className="text-decoration-none nav-text" onClick={closeHamburger}>
                <li>Testimonials</li>
              </NavLink>
              <NavLink to="Contact" className="text-decoration-none nav-text d-lg-none " onClick={closeHamburger}>
                <li>Contact Me</li>
              </NavLink>
            </ul>
          </div>
          <NavLink to="Contact" className="text-decoration-none">
            <button className="nav-button d-none d-lg-block">
              Contact Me
            </button>
          </NavLink>
          <div className={`hamburger ${isActive ? "active" : ""}`} onClick={toggleHamburger}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
        <Outlet />
      </main>
    </>
  );
};

export default NavBar;
