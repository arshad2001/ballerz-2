import React from "react";
import "./App.css";
import "./index.css";
import "./foot.css";
import logo from "./assets/logo-white.png";
import iconInsta from "./assets/icon-instagram.png";
import iconSpotify from "./assets/icon-spotify.png";
import iconTwitter from "./assets/icon-twitter.png";
import iconYoutube from "./assets/icon-youtube.png";
import { BeakerIcon } from "@heroicons/react/24/solid";

function Foot() {
  return (
    <div className="footer-background font-color-white font-spacing-1">
      <footer className="footer">
        {/* <div class="footer-section spacing-20 font-size-20 font-spacing-normal">
					<img src={logo} className='image-size-32 margin-right-8'/>
					<a className='font-weight-bold'>HIMATEKKOM ITS</a>
				</div> */}
        <div class="spacing-28 footerSection font-size-12">
          <div className="footer-section-parent pt-4">
            <div className="footer-section-child font-weight-normal">
              <a className="spacing-12 font-weight-bold font-size-16">
                Join Us
              </a>
              <a>Staff</a>
              <a>Volunteer</a>
            </div>
            <div className="footer-section-child font-weight-normal">
              <a className="spacing-12 font-weight-bold font-size-16">
                Get in Touch
              </a>
              <a>Help Center</a>
              <a>Location</a>
            </div>
            <div className="footer-section-child font-weight-normal">
              <a className="spacing-12 font-weight-bold font-size-16">
                Connect with Us
              </a>
              <div className="footer-section-parent">
                <img src={iconInsta} className="image-size-24 margin-right-8" />
                <img
                  src={iconSpotify}
                  className="image-size-24 margin-right-8"
                />
                <img
                  src={iconTwitter}
                  className="image-size-24 margin-right-8"
                />
                <img
                  src={iconYoutube}
                  className="image-size-24 margin-right-8"
                />
                {/* <BeakerIcon className="h-6 w-6 text-blue-500"/> */}
              </div>
            </div>
            <div className="footer-section-child font-weight-normal">
              <a className="spacing-12 font-weight-bold font-size-16">
                Help Us Grow
              </a>
              <a>We are open to feedback!</a>
            </div>
          </div>
        </div>
        <div class="footer-section font-weight-light font-size-18 font-spacing-normal">
          <a className="font-weight-light">
            2022 | RELCOM CONVERGENCE HIMATEKKOM ITS
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Foot;
