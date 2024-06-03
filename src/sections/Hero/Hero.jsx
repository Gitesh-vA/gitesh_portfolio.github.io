import React from "react";

const Hero = () => {
  return (
    <>
      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center">
        <div className="hero-container" data-aos="fade-in">
          <h1>Gitesh Yadav</h1>
          <p>
            I'm{" "}
            <span
              className="typed"
              data-typed-items="Developer">Software Developer</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
