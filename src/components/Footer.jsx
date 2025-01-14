import React from "react";
import { Twitter, Facebook, Instagram, Linkedin } from "react-bootstrap-icons";
const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="index.html" className="logo d-flex align-items-center">
              <span className="sitename">NY Solutions</span>
            </a>
            <div className="footer-contact pt-3">
              <p>
                Shop No 14 Sahu Babu Complex Pili Nadi, Kamptee Rd, uppalwadi,
                Nagpur, Maharashtra 440026
              </p>
              <p className="mt-3">
                <strong>Phone:</strong> <span>+91 86981 55280</span>
              </p>
              <p>
                <strong>Email:</strong> <span>nyinternetcafe04@gmail.com</span>
              </p>
            </div>
            <div className="social-links d-flex mt-4">
              <a href="https://x.com/e_sakha_in">
                <Twitter className="bi bi-twitter-x" />
              </a>
              <a href="https://www.facebook.com/nyadsServices?mibextid=ZbWKwL">
                <Facebook className="bi bi-facebook" />
              </a>
              <a href="https://www.instagram.com/esakha_in?igsh=MWs1OGw3eG0zbzkxdA==">
                <Instagram className="bi bi-instagram" />
              </a>
              <a href="https://www.linkedin.com/company/ny-all-in-one-solutions-and-services-ltd/">
                <Linkedin className="bi bi-linkedin" />
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4></h4>
            <ul>
              <li>
                <a href="#"></a>
              </li>
              <li>
                <a href="#"></a>
              </li>
              <li>
                <a href="#"></a>
              </li>
              <li>
                <a href="#"></a>
              </li>
              <li>
                <a href="#"></a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4></h4>
            <ul>
              <li>
                <a href="#"></a>
              </li>
              <li>
                <a href="#"></a>
              </li>
              <li>
                <a href="#"></a>
              </li>
              <li>
                <a href="#"></a>
              </li>
              <li>
                <a href="#"></a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <a href="#">Web Design</a>
              </li>
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">Product Management</a>
              </li>
              <li>
                <a href="#">Marketing</a>
              </li>
              <li>
                <a href="#">Graphic Design</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Terms of service</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span>{" "}
          <strong className="px-1 sitename">ny solutions</strong>{" "}
          <span>All Rights Reserved</span>
        </p>
        <div className="credits">
          Designed by{" "}
          <a href="https://www.linkedin.com/in/dikesh-gautam-5a3740227/?originalSubdomain=in">
            dikesh gautam
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
