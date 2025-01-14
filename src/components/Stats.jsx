import React, { useEffect } from "react";
import PureCounter from "@srexi/purecounterjs";

const Stats = () => {
  useEffect(() => {
    const pure = new PureCounter({
      selector: ".purecounter",
      start: 0, // Starting number [uint]
      end: 100, // End number [uint]
      duration: 2, // The time in seconds for the animation to complete [seconds]
      delay: 10, // The delay between each iteration (the default of 10 will produce 100 fps) [miliseconds]
      once: true, // Counting at once or recount when the element in view [boolean]
      pulse: false, // Repeat count for certain time [boolean:false|seconds]
      decimals: 0, // How many decimal places to show. [uint]
      legacy: true, // If this is true it will use the scroll event listener on browsers
      filesizing: false, // This will enable/disable File Size format [boolean]
      currency: false, // This will enable/disable Currency format. Use it for set the symbol too [boolean|char|string]
      formater: "us-US", // Number toLocaleString locale/formater, by default is "en-US" [string|boolean:false]
      separator: false, // This will enable/disable comma separator for thousands. Use it for set the symbol too [boolean|char|string]
    });
  }, []);

  return (
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span
                data-purecounter-start="0"
                data-purecounter-end="100"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>Clients</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span
                data-purecounter-start="0"
                data-purecounter-end="150"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>Projects</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span
                data-purecounter-start="0"
                data-purecounter-end="24"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>Hours Of Support</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span
                data-purecounter-start="0"
                data-purecounter-end="12"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>Workers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
