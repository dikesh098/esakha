import { useEffect, useRef, useState } from "react";
import { ArrowUpShort } from "react-bootstrap-icons";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Faq from "./components/Faq";
import CallToAction from "./components/CallToAction";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [scrolling, setscrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setscrolling(true);
    } else {
      setscrolling(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <NavBar />
      <main className="main">
        <Hero />
        <About />
        <Stats />
        <Services />
        <Faq />
        <CallToAction />
        <Contact />
      </main>
      <Footer />

      <a
        href="#"
        id="scroll-top"
        className={`scroll-top d-flex align-items-center justify-content-center ${
          scrolling ? "active" : ""
        }`}
        onClick={(e) => {
          e.preventDefault();
          scrollToTop();
        }}
      >
        <ArrowUpShort
          className="bi bi-arrow-up-short"
          color="white"
          size={30}
        />
      </a>
    </>
  );
}

export default App;
