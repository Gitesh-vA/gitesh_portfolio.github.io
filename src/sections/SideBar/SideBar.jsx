import React from "react";

const SideBar = () => {
  return (
    <>
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img
              src="assets/img/profile-img.jpeg"
              alt=""
              className="img-fluid rounded-circle"
            />
            <h1 className="text-light">
              <a href="index.html">Gitesh Yadav</a>
            </h1>
            <div className="social-links mt-3 text-center">
              <a
                href="https://m.facebook.com/gitesh.yadav.786/"
                className="facebook">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="mailto:7869028815yadav@gmail.com" className="instagram">
                <i className="bx bx-briefcase"></i>
              </a>
              <a
                href="http://linkedin.com/in/gitesh-yadav-9894231b7"
                className="linkedin">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>

          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li>
                <a href="#hero" className="nav-link scrollto active">
                  <i className="bx bx-home"></i> <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link scrollto">
                  <i className="bx bx-user"></i> <span>About</span>
                </a>
              </li>
              <li>
                <a href="#resume" className="nav-link scrollto">
                  <i className="bx bx-file-blank"></i> <span>Resume</span>
                </a>
              </li>
              <li>
                <a href="#skills" className="nav-link scrollto">
                  <i className="bx bx-book-content"></i> <span>Skills</span>
                </a>
              </li>
              <li>
                <a href="#projects" className="nav-link scrollto">
                  <i className="bx bx-server"></i> <span>Projects</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link scrollto">
                  <i className="bx bx-envelope"></i> <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default SideBar;
