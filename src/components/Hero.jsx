import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { GearFill } from "react-bootstrap-icons";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="hero" className="hero section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div
              className="hero-content"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="company-badge mb-4">
                <GearFill className="bi me-2" />
                Working for your success
              </div>

              <h1 className="mb-4">
                NY All in One <br />
                Solutions and <br />
                <span className="accent-text">Services Limited.</span>
              </h1>

              <p className="mb-4 mb-md-5">IT Services and IT Consulting</p>

              <div className="hero-buttons">
                <a href="#about" className="btn btn-primary me-0 me-sm-2 mx-1">
                  Get Started
                </a>
                <a
                  href="https://youtube.com/@esakha.in0?si=SU-pdPF_TED6h0k3"
                  className="btn btn-link mt-2 mt-sm-0 glightbox"
                >
                  <i className="bi bi-play-circle me-1"></i>
                  Play Video
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div
              className="hero-image"
              data-aos="zoom-out"
              data-aos-delay="300"
            >
              <img
                src="/img/illustration-1.webp"
                alt="Hero Image"
                className="img-fluid"
              />

              <div className="customers-badge">
                <div className="customer-avatars">
                  <img
                    src="/img/avatar-1.webp"
                    alt="Customer 1"
                    className="avatar"
                  />
                  <img
                    src="/img/avatar-2.webp"
                    alt="Customer 2"
                    className="avatar"
                  />
                  <img
                    src="/img/avatar-3.webp"
                    alt="Customer 3"
                    className="avatar"
                  />
                  <img
                    src="/img/avatar-4.webp"
                    alt="Customer 4"
                    className="avatar"
                  />
                  <img
                    src="/img/avatar-5.webp"
                    alt="Customer 5"
                    className="avatar"
                  />
                  <span className="avatar more">12+</span>
                </div>
                <p className="mb-0 mt-2">100+ Clients and satisfied results.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
