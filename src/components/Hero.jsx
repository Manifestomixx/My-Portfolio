import React from 'react'
import image from "../assets/Hero.png"
import "../style/Hero.css"
import About from './About'
import Expertise from './Expertise'
import PortFolio from './PortFolio'
import Testimonial from './Testimonial'
import Contact from './Contact'
import Footer from '../layout/Footer'

const Hero = () => {
  return (
    <>
    <main className='container-fluid bg '>
      <section className='container'>
    <div className='d-md-flex justify-content-center align-items-center py-5 gap-2'>
      <div className=' w-75 mt-5'>
        <h6 className='h6-text mb-3'>Hey, I am John</h6>
        <h1 className='h1-text'>I develop dynamic and User-Centered Web Applications</h1>
        <p className='p-text w-100'>My expertise spans both front-end and back-end development, enabling me to build comprehensive solutions that meet diverse client needs.</p>
        <button className='hero-button '>Get In Touch</button>
      </div>
      <div className='mobile'>
        <img src={image} alt="home-image" className='img-fluid 50' />
      </div>
    </div>
      </section>
    </main>
      <div>
      <Expertise/>
      <About/>
      <PortFolio/>
      <Testimonial/>
      <Contact/>
      </div>
      {/* <Footer/> */}
    </>
  )
}

export default Hero