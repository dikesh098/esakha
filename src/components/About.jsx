import React from "react";
import { TelephoneFill, CheckCircleFill } from "react-bootstrap-icons";

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 align-items-center justify-content-between">
          <div className="col-xl-5" data-aos="fade-up" data-aos-delay="200">
            <span className="about-meta">MORE ABOUT US</span>
            <h2 className="about-title">
              NY All in One Solutions and Services ltd.
            </h2>
            <p className="about-description">
              Welcome to NY Solutions, where innovation meets expertise. As a
              dynamic startup specializing in IT consultancy and IT services, we
              are dedicated to empowering businesses with cutting-edge
              technology solutions tailored to their unique needs.
            </p>

            <div className="row feature-list-wrapper">
              <div className="col-md-6">
                <ul className="feature-list">
                  <li>
                    <CheckCircleFill
                      className="bi bi-check-circle-fill"
                      color="#0d83fd"
                      size={20}
                    />
                    Internet cafe
                  </li>
                  <li>
                    <CheckCircleFill
                      className="bi bi-check-circle-fill"
                      color="#0d83fd"
                      size={20}
                    />{" "}
                    Gov. document Solutions
                  </li>
                  <li>
                    <CheckCircleFill
                      className="bi bi-check-circle-fill"
                      color="#0d83fd"
                      size={20}
                    />{" "}
                    Cunsaltancy Services
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="feature-list">
                  <li>
                    <CheckCircleFill
                      className="bi bi-check-circle-fill"
                      color="#0d83fd"
                      size={20}
                    />
                    Tech Solutions
                  </li>
                  <li>
                    <CheckCircleFill
                      className="bi bi-check-circle-fill"
                      color="#0d83fd"
                      size={20}
                    />
                    Web Development
                  </li>
                  <li>
                    <CheckCircleFill
                      className="bi bi-check-circle-fill"
                      color="#0d83fd"
                      size={20}
                    />
                    Electronic Hardware
                  </li>
                </ul>
              </div>
            </div>

            <div className="info-wrapper">
              <div className="row gy-4">
                <div className="col-lg-5">
                  <div className="profile d-flex align-items-center gap-3">
                    <img
                      src="/img/profile.webp.jpg"
                      alt="CEO Profile"
                      className="profile-image"
                    />
                    <div>
                      <h4 className="profile-name">Yogesh Rahangdale</h4>
                      <p className="profile-position">CEO &amp; Founder</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="contact-info d-flex align-items-center gap-2">
                    <i className="bi bi-telephone-fill"></i>
                    <div>
                      <p className="contact-label">Call us anytime</p>
                      <p className="contact-number">86981 55280</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6" data-aos="fade-up" data-aos-delay="300">
            <div className="image-wrapper">
              <div
                className="images position-relative"
                data-aos="zoom-out"
                data-aos-delay="400"
              >
                <img
                  src="/img/about-5.webp"
                  alt="Business Meeting"
                  className="img-fluid main-image rounded-4"
                />
                <img
                  src="/img/about-2.webp"
                  alt="Team Discussion"
                  className="img-fluid small-image rounded-4"
                />
              </div>
              <div className="experience-badge floating">
                <h3>
                  6+ <span>Years</span>
                </h3>
                <p>Of experience in business service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
