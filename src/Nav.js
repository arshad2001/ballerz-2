import React from "react";
import "./App.css";
import "./nav.css";
import "./index.css";
import logoColored from "./assets/logo-colored.png";
import logoText from "./assets/logo-colored-text.png";

function Nav() {
  return (
    // <div className="nav-background shadow-md  bg-black text-white	bac">
    <div className="nav-background shadow-md  bg-white text-black	bac">
      <nav class="navbar">
        <div className="nav-section">
          <img
            src={logoColored}
            className="image-size-32 margin-8 logo-hima-navbar hover:scale-110 transition duration-200 ease-in-out"
          />
          <a className="font-size-20 font-weight-bold">HIMATEKKOM ITS</a>
          {/* <a className='font-size-16 font-weight-bold'>HIMATEKKOM</a> */}
        </div>

        <ul class="nav-list font-size-20 font-weight-normal text-black">
          <li className="hover:text-custom-blue">
            <a href="#Home">Home</a>
          </li>
          <li className="hover:text-custom-blue">
            <a href="#Info">Info</a>
          </li>
          <li className="hover:text-custom-blue">
            <a href="#Academic">Academic</a>
          </li>
        </ul>

        {/* 
				<div class="rightNav">
					<input type="text" name="search" id="search" />
					<button class="btn btn-sm">Search</button>
				</div> */}
      </nav>
    </div>
  );
}

export default Nav;
