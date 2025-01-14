import React from "react";
import {
  Activity,
  ArrowRight,
  Diagram3,
  Easel,
  ClipboardData,
  App,
} from "react-bootstrap-icons";
const Services = () => {
  return (
    <section id="services" className="services section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>So many Services Provides B2B/C2C/C2B and so many more…</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="service-card d-flex">
              <div className="icon flex-shrink-0">
                <i className="bi bi-activity"></i>
                <Activity className="bi bi-activity" />
              </div>
              <div>
                <h3>Internet Cafe Services</h3>
                <p>
                  Internet Access, Computer Rental, Printing Services, Scanning
                  & Copying Services, Fax Services, Email & Social Media Access,
                  Software Installation & Assistance, Gaming Zone, Virtual
                  Meetings & Conferences, Photocopy Services.
                </p>
                <a href="-----------" className="read-more">
                  Read More <ArrowRight className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div className="service-card d-flex">
              <div className="icon flex-shrink-0">
                <Diagram3 className="bi bi-arrow-right" />
              </div>
              <div>
                <h3>Common Service Center (CSC) Services</h3>
                <p>
                  Government Services, Banking & Financial Services, Education &
                  Employment Services, Utility Services, Legal Services.
                </p>
                <a href="-----------------" className="read-more">
                  Read More <ArrowRight className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <div className="service-card d-flex">
              <div className="icon flex-shrink-0">
                <Easel className="bi bi-arrow-right" />
              </div>
              <div>
                <h3>Printing and Scanning Services</h3>
                <p>
                  Document Printing, Document Scanning, Photo Printing, Data
                  Backup & Recovery.
                </p>
                <a href="----------" className="read-more">
                  Read More <ArrowRight className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
            <div className="service-card d-flex">
              <div className="icon flex-shrink-0">
                <ClipboardData className="bi bi-arrow-right" />
              </div>
              <div>
                <h3>Additional Services for Customers</h3>
                <p>
                  Wi-Fi Hotspot, Lounge & Refreshment Zone, Conference Room (for
                  Business Meetings), Event Hosting, Digital Signature Services.
                </p>
                <a href="----------" className="read-more">
                  Read More <ArrowRight className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
            <div className="service-card d-flex">
              <div className="icon flex-shrink-0">
                <App className="bi bi-arrow-right" />
              </div>
              <div>
                <h3>Mobile App Services</h3>
                <p>
                  Service Booking, Payment Gateway Integration, User Account
                  Management, Location-Based Services, Notifications &
                  Reminders.
                </p>
                <a href="-----------" className="read-more">
                  Read More <ArrowRight className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
