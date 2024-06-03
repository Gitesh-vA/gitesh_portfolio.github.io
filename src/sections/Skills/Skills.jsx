import React from "react";

const Skills = () => {
  return (
    <>
      <section id="skills" class="skills section-bg">
        <div class="container">
          <div class="section-title">
            <h2>Skills</h2>
            <p>
              Skilled in React, JavaScript, HTML, CSS, and modern web
              development tools, with proven experience in creating responsive,
              user-friendly web applications.
            </p>
          </div>

          <div class="row skills-content">
            <div class="col-lg-6" data-aos="fade-up">
              <div class="progress">
                <span class="skill">
                  HTML <i class="val">100%</i>
                </span>
                <div class="progress-bar-wrap">
                  <div
                    style={{width: "100%"}}
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>
              </div>

              <div class="progress">
                <span class="skill">
                  CSS <i class="val">90%</i>
                </span>
                <div class="progress-bar-wrap">
                  <div
                    style={{width: "90%"}}
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>
              </div>

              <div class="progress">
                <span class="skill">
                  JavaScript <i class="val">90%</i>
                </span>
                <div class="progress-bar-wrap">
                  <div
                    style={{width: "90%"}}
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>
              </div>
            </div>

            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div class="progress">
                <span class="skill">
                  React <i class="val">80%</i>
                </span>
                <div class="progress-bar-wrap">
                  <div
                    style={{width: "90%"}}
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>
              </div>

              <div class="progress">
                <span class="skill">
                  Version Control <i class="val">90%</i>
                </span>
                <div class="progress-bar-wrap">
                  <div
                    style={{width: "90%"}}
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>
              </div>

              <div class="progress">
                <span class="skill">
                  Node <i class="val">60%</i>
                </span>
                <div class="progress-bar-wrap">
                  <div
                    style={{width: "60%"}}
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="55"
                    aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
