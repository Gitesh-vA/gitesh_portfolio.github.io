import React from "react";

const About = () => {
  return (
    <>
      <section id="about" class="about">
        <div class="container">
          <div class="section-title">
            <h2>About</h2>
            <p>
              Dynamic React Developer with Over 3 Years of Experience Seeking
              Leadership Role to Drive Organizational Success.I am eager to
              embrace a new leadership position where my extensive expertise and
              continuous learning will contribute to the growth and success of
              your organization. Let's connect and explore how I can add value
              to your team.
            </p>
          </div>

          <div class="row">
            <div class="col-lg-4" data-aos="fade-right">
              <img src="assets/img/back.jpeg" class="img-fluid" alt="" />
            </div>
            <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>ReactJs Developer.</h3>
              <p class="fst-italic">
                Passionate React developer with 3+ years of experience in
                building dynamic, responsive web applications, adept at
                transforming complex requirements into engaging user
                experiences.
              </p>
              <div class="row">
                <div class="col-lg-6">
                  <ul>
                    <li>
                      <i class="bi bi-chevron-right"></i>{" "}
                      <strong>Birthday:</strong> <span>14 March 1999</span>
                    </li>
                    {/* <li>
                      <i class="bi bi-chevron-right"></i>{" "}
                      <strong>Website:</strong> <span>www.example.com</span>
                    </li> */}
                    <li>
                      <i class="bi bi-chevron-right"></i>{" "}
                      <strong>Phone:</strong> <span>+91 7987603237</span>
                    </li>
                    <li>
                      <i class="bi bi-chevron-right"></i> <strong>City:</strong>{" "}
                      <span>Indore, India</span>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul>
                    <li>
                      <i class="bi bi-chevron-right"></i> <strong>Age:</strong>{" "}
                      <span>25</span>
                    </li>
                    <li>
                      <i class="bi bi-chevron-right"></i>{" "}
                      <strong>Degree:</strong> <span>Graduate</span>
                    </li>
                    <li>
                      <i class="bi bi-chevron-right"></i>{" "}
                      <strong>Email:</strong>{" "}
                      <span>7869028815yadav@gmail.com</span>
                    </li>
                    {/* <li>
                      <i class="bi bi-chevron-right"></i>{" "}
                      <strong>Freelance:</strong> <span>Available</span>
                    </li> */}
                  </ul>
                </div>
              </div>
              {/* <p>
                Officiis eligendi itaque labore et dolorum mollitia officiis
                optio vero. Quisquam sunt adipisci omnis et ut. Nulla
                accusantium dolor incidunt officia tempore. Et eius omnis.
                Cupiditate ut diprofile-imgcta maxime officiis quidem quia. Sed et
                consectetur qui quia repellendus itaque neque. Aliquid amet
                quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis
                culpa magni laudantium dolores.
              </p> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
