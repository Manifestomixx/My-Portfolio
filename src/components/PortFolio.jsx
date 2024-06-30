import React from "react";
import { Link } from "react-router-dom";
import Ahuse from "../assets/ahuse.png";
import App from "../assets/app-dash.png";
import Rent from "../assets/easy-rent.png";
import github from "../assets/github-white.svg";
import { FiArrowUpRight } from "react-icons/fi";
import "../style/Portfolio.css";


const PortFolio = () => {
  return (
    <>
      <main className="container-fluid bg-portfolio">
        <section className="container pt-5">
          <div className="my-5">
            <h6 className="pf-h6">Recent Projects</h6>
            <div className="d-flex justify-content-between align-items-center">
              <h2 className="fw-bold mt-2 pf-head ">My Portfolio</h2>
              <button className="pf-button ">
                <img src={github} alt="github-icon" className="pf-img" /> Visit
                My GitHub
              </button>
            </div>
          </div>
          <section className="d-md-flex gap-4 mb-5 pf-box">
            <div className="card shadow">
              <img src={Ahuse} alt="house-img" className="img-fluid" />
              <div className="p-3">
                <h4 className="box-h4">Ahuse</h4>
                <p className="box-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
                <div className="mb-3">
                  <div className="d-flex gap-2 align-items-center">
                  <Link className="text-decoration-none text-black"><h6 className="mt-2 pf-web">View Website</h6></Link>
                    <FiArrowUpRight  className="arrow"/>

                  </div>
                  <div className="line"></div>
                </div>
              </div>
            </div>
            <div className="card shadow">
              <img src={App} alt="App-dashboard" className="img-fluid" />
              <div className="p-3">
                <h4 className="box-h4">App Dashboard</h4>
                <p className="box-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
                <div className="mb-3">
                  <div className="d-flex gap-2 align-items-center">
                  <Link className="text-decoration-none text-black"><h6 className="mt-2 pf-web">View Website</h6></Link>
                    <FiArrowUpRight  className="arrow"/>
                  </div>
                  <div className="line"></div>
                </div>
              </div>
            </div>
            <div className="card shadow">
              <img src={Rent} alt="rent-img" className="img-fluid" />
              <div className="p-3">
                <h4 className="box-h4">Easy Rent</h4>
                <p className="box-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
                <div className="mb-3">
                  <div className="d-flex gap-2 align-items-center">
                    <Link className="text-decoration-none text-black"><h6 className="mt-2 pf-web">View Website</h6></Link>
                    <FiArrowUpRight  className="arrow"/>
                  </div>
                  <div className="line"></div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
      
    </>
  );
};

export default PortFolio;
