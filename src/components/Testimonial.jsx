import React from 'react'
import stars from "../assets/Stars.png"
import Customer from "../assets/Avatar 1.png"
import Customer2 from "../assets/Avatar 2.png"
import Customer3 from "../assets/Avatar 3.png"
import "../style/Testimonial.css"


const Testimonial = () => {
  return (
    <>
     <main className="container-fluid bg-testimonial">
        <section className="container py-5">
          <div className="my-5">
            <h6 className='sub-head'>Clients Feedback</h6>
            <h2 className="fw-bold mb-5 h2-text">Customer testimonials</h2>
          </div>
          <section className="d-md-flex gap-4 my-5 testimonial-box">
          <div className="customer p-3 ">
            <div >
            <img src={stars} alt=""  className='star mb-4'/>
            <p className="customer-p mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra."</p>
            </div>
            <div className='d-flex gap-3'>
            <img src={Customer} alt="mobile-icon"  className="img-fluid customer-img"/>
            <div className='pt-2'>
              <h5 className='customer-h5'>Dianne Russell</h5>
              <p className='brand'>Starbucks</p>
            </div>
            </div>
          </div>
          <div className="customer p-3 ">
            <div >
            <img src={stars} alt=""  className='star mb-4'/>
            <p className="customer-p mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra."</p>
            </div>
            <div className='d-flex gap-3'>
            <img src={Customer2} alt="mobile-icon"  className="img-fluid customer-img"/>
            <div className='pt-2'>
              <h5 className='customer-h5'>Kristin Watson</h5>
              <p className='brand'>Louis Vuitton</p>
            </div>
            </div>
          </div>
          <div className="customer p-4 ">
            <div >
            <img src={stars} alt=""  className='star mb-4'/>
            <p className="customer-p mb-4 ">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra."</p>
            </div>
            <div className='d-flex gap-3 align-items-center '>
            <img src={Customer3} alt="mobile-icon"  className="img-fluid customer-img"/>
            <div className='pt-2'>
              <h5 className='customer-h5'>Kathryn Murphy</h5>
              <p className='brand'>McDonald's</p>
            </div>
            </div>
          </div>
          
          
          </section>
        </section>
       
      </main>
      
    </>
  )
}

export default Testimonial