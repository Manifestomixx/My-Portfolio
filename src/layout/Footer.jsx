import React from 'react'
import logo from "../assets/logo.svg";
import { Outlet, Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "../style/Footer.css"

const Footer = () => {
  return (
    <>
    <main className='container-fluid bg-footer'>
        <footer className='container py-3'>
            <section className='d-md-flex align-items-center justify-content-between  my-3'>

        <div className="d-flex align-items-center">
            <img src={logo} alt="logo" className="logo-footer" />
            <h5 className="mt-2 logo-text">JohnDev,</h5>
          </div>

          <div>
            <ul className="list-unstyled d-flex gap-md-4 mt-3 align-items-center mobile-footer">
              <Link to="/" className="text-decoration-none text-black text">
                <li>Home</li>
              </Link>
              <Link to="Portfolio" className="text-decoration-none text-black  text">
                <li>Portfolio</li>
              </Link>
              <Link to="About" className="text-decoration-none text-black text">
                <li>About me</li>
              </Link>
              <Link to="Contact" className="text-decoration-none text-black text">
                <li>Contact</li>
              </Link>
              <Link to="Testimonial" className="text-decoration-none text-black text">
                <li>Testimonials</li>
              </Link>
            </ul>
          </div>

          <div className=' d-flex gap-2  icon-mobile'>
          <FaFacebookF className='icon img-fluid' />
          <FaInstagram className='icon img-fluid' />
          <FaTwitter className='icon img-fluid' />
          <FaLinkedin className='icon img-fluid' />
          </div>

            </section>
          <hr />
          <div className='d-flex justify-content-between my-5'>
            <h6 className='text'>Made with 💖 by ManitheDev</h6>
            <div className='d-flex gap-4'>
                <h6 className='text'>Privacy Policy</h6>
                <h6 className='text'>Terms of Service</h6>
                <h6 className='text'>Cookies Settings</h6>
            </div>
          </div>
        </footer>
    </main>
    </>
  )
}

export default Footer