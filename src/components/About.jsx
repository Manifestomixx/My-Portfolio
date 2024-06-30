import React from "react";
import image from "../assets/About Me.png";
import "../style/About.css"


const About = () => {
  return (
    <>
      <main className="size">
        <section className="container ">
          <div className="d-md-flex justify-content-center align-items-center gap-4 my-5">
            <div className="p-5">
            <img src={image} alt="" className="img-fluid " />
            </div>
            <div className="p-3">
              <h2 className="header">About Me</h2>
              <p className="about-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                varius faucibus massa sollicitudin amet augue. Nibh metus a
                semper purus mauris duis. Lorem eu neque, tristique quis duis.
                Nibh scelerisque ac adipiscing velit non nulla in amet
                pellentesque. <br/><br />
                Sit turpis pretium eget maecenas. Vestibulum dolor
                mattis consectetur eget commodo vitae. Amet pellentesque sit
                pulvinar lorem mi a, euismod risus r.
              </p>
            </div>
          </div>
        </section>
      </main>
      
    </>
  );
};

export default About;
