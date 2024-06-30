import React from "react";
import mobile from "../assets/icomoon-free_mobile.png";
import brand from "../assets/tag 1.png";
import test from "../assets/carbon_ibm-engineering-test-mgmt.png";
import cloud from "../assets/feather-pen 1.png";
import "../style/Expertise.css";

const Expertise = () => {
  return (
    <>
      <main className="container-fluid bgc">
        <section className="container py-5">
          <div className="my-5">
            <h6 className="sub-head">My Skills</h6>
            <h2 className="fw-bold header">My Expertise</h2>
          </div>
          <section className="d-flex gap-4 flex ">
            <div className="box p-3">
              <img src={mobile} alt="mobile-icon" className="box-img" />
              <div>
                <h4 className="box-h4">Responsive Design</h4>
                <p className="box-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
            </div>
            <div className="box p-3">
              <img src={brand} alt="brand-icon" className="box-img" />
              <div>
                <h4 className="box-h4">Front-End Frameworks</h4>
                <p className="box-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
            </div>
            <div className="box p-3">
              <img src={test} alt="test-icon" className="box-img" />
              <div>
                <h4 className="box-h4">Testing and Debugging</h4>
                <p className="box-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
            </div>
            <div className="box p-3">
              <img src={cloud} alt="feather-icon" className="box-img" />
              <div>
                <h4 className="box-h4">Cloud Services</h4>
                <p className="box-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default Expertise;
