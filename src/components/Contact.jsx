import React, { useState } from "react";
import { GeoAlt, Telephone, Envelope } from "react-bootstrap-icons";
import { db } from "../../firebase_config";
import { collection, addDoc } from "firebase/firestore";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    error: "",
    success: "",
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: "", success: "" });

    try {
      const docRef = await addDoc(collection(db, "contacts"), formData);
      setStatus({
        loading: false,
        error: "",
        success: `Message sent successfully!`,
      });
      setFormData({ name: "", mobile: "", email: "", message: "" }); // Reset the form
    } catch (error) {
      setStatus({
        loading: false,
        error: "Failed to send the message. Try again.",
        success: "",
      });
      console.error("Error adding document: ", error);
    }
  };

  return (
    <section id="contact" className="contact section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>For product related informations.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4 g-lg-5">
          <div className="col-lg-5">
            <div className="info-box" data-aos="fade-up" data-aos-delay="200">
              <h3>Contact Info</h3>
              <div
                className="info-item"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon-box">
                  <GeoAlt className="bi bi-geo-alt" />
                </div>
                <div className="content">
                  <h4>Our Location</h4>
                  <p>Shop No 14 Sahu Babu Complex Pili Nadi,</p>
                  <p>Kamptee Rd, uppalwadi,</p>
                  <p>Nagpur, Maharashtra 440026</p>
                </div>
              </div>

              <div
                className="info-item"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="icon-box">
                  <Telephone className="bi bi-telephone" />
                </div>
                <div className="content">
                  <h4>Phone Number</h4>
                  <p>+91 86981 55280</p>
                  <p>+91 86698 45548</p>
                </div>
              </div>

              <div
                className="info-item"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="icon-box">
                  <Envelope className="bi bi-envelope" />
                </div>
                <div className="content">
                  <h4>Email Address</h4>
                  <p>help@esakha.in</p>
                  <p>nyinternetcafe04@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="contact-form">
              <h3>Get In Touch</h3>
              <p>
                If a query or need information just add a message there and send
                it...
              </p>

              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="row gy-4">
                  <div className="col-md-12">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="number"
                      className="form-control"
                      name="mobile"
                      placeholder="Mobile no."
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="6"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="col-12 text-center">
                    {status.loading && <div id="loading">Loading...</div>}
                    {status.error && (
                      <div id="error-message" style={{ color: "red" }}>
                        {status.error}
                      </div>
                    )}
                    {status.success && (
                      <div id="sent-message" style={{ color: "green" }}>
                        {status.success}
                      </div>
                    )}
                    <button
                      type="submit"
                      className="btn"
                      disabled={status.loading}
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
