import React from "react";

const NavBar = () => {
  return (
    <header className="header d-flex align-items-center fixed-top">
      <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <a href="#" className="logo d-flex align-items-center me-auto me-xl-0">
          <h1 className="sitename">E-SAKHA</h1>
        </a>

        <nav id="navmenu" className="navmenu">
            <ul>
            <li><a href="#hero" className="active">Home</a></li>
          <li><a href="#about">About</a></li>
          {/* <li><a href="#features">Features</a></li>  */}
          <li><a href="#services">Services</a></li>
        {/* <li><a href="#pricing">Pricing</a></li>  */}
          <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        <a className="btn-getstarted" href="index.html#about">Get Started</a>
      </div>
    </header>
  );
};

export default NavBar;
