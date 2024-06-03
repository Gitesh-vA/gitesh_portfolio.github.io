import React from "react";

const Resume = () => {
  return (
    <>
      <section id="resume" class="resume">
        <div class="container">
          <div class="section-title">
            <h2>Resume</h2>
            <p>
              Dynamic React Developer with Over 5 Years of Experience Seeking
              Leadership Role to Drive Organizational Success.I am eager to
              embrace a new leadership position where my extensive expertise and
              continuous learning will contribute to the growth and success of
              your organization. Let's connect and explore how I can add value
              to your team.
            </p>
          </div>

          <div class="row">
            <div class="col-lg-6" data-aos="fade-up">
              <h3 class="resume-title">Sumary</h3>
              <div class="resume-item pb-0">
                <h4>Gitesh Yadav</h4>
                <p>
                  <em>
                    Passionate React developer with 3+ years of experience in
                    building dynamic, responsive web applications, adept at
                    transforming complex requirements into engaging user
                    experiences.
                  </em>
                </p>
                <ul>
                  <li>Scheme No.78, Narmada Colony, MP</li>
                  <li>(+91) 7987603237</li>
                  <li>7869028815yadav@gmail.com</li>
                </ul>
              </div>

              <h3 class="resume-title">Education</h3>
              <div class="resume-item">
                <h4>Higher Secondary</h4>
                <h5>2015 - 2016</h5>
                <p>
                  <em>Daisy Dales Senior Secondary School</em>
                </p>
                <p>CGPA : 7.8</p>
              </div>
              <div class="resume-item">
                <h4>Graduation</h4>
                <h5>2016 - 2020</h5>
                <p>
                  <em>IPS Academy, Indore</em>
                </p>
                <p>
                  Computer Science Specification
                  <br />
                  CGPA - 7.2
                </p>
              </div>
            </div>
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 class="resume-title">Professional Experience</h3>
              <div class="resume-item">
                <h4>ReactJs Developer</h4>
                <h5>2020 - 2021</h5>
                <p>
                  <em>Tudip Technology Pvt Limited, Pune </em>
                </p>
                <ul>
                  <li>
                    Developed and maintained highly interactive and responsive
                    web applications using React.js, enhancing user experiences
                    and engagement.
                  </li>
                  <li>
                    Expertise in JavaScript (ES6+), HTML5, CSS3, and modern
                    front-end development practices.
                  </li>
                  <li>
                    Implemented Redux for efficient state management across
                    complex applications.
                  </li>
                </ul>
              </div>
              <div class="resume-item">
                <h4>Junior Software Developer</h4>
                <h5>2021 - Present</h5>
                <p>
                  <em>Cyber Infrastructure Pvt Limited, Indore</em>
                </p>
                <ul>
                  <li>
                    Led a team of 5 developers in delivering a high-traffic
                    e-commerce platform, improving user engagement by 30%
                  </li>
                  <li>
                    Improved application load times by 25% through code
                    optimization, lazy loading, and effective use of Webpack and
                    Babel.
                  </li>
                  <li>
                    Proficient in Agile methodologies, contributing to effective
                    sprint planning, daily stand-ups, and retrospectives.
                  </li>
                  <li>
                    Built and scaled full-stack applications using Node.js and
                    Express.js supporting multiple users.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
