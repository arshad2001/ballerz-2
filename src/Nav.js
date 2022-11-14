import React from "react";
import "./App.css";
import "./nav.css";
import "./index.css";
import logoColored from "./assets/logo-colored.png";
import logoText from "./assets/logo-colored-text.png";

function Nav() {
  return (
    // <div className="nav-background shadow-md  bg-black text-white	bac">
    <div className="w-full bg-white text-black shadow-md fixed z-50">
      <nav class="w-4/5 h-16 grid grid-cols-2 m-auto items-center">
        <div className="flex w-max py-3 center justify-start">
          <img
            src={logoColored}
            className="max-w-32px mr-2  hover:scale-110 transition duration-200 ease-in-out"
          />
          <a className="text-xl font-bold self-center cursor-pointer">
            HIMATEKKOM ITS
          </a>
          {/* <a className='font-size-16 font-weight-bold'>HIMATEKKOM</a> */}
        </div>
        {/* ini bisa banget pake component, but still dunno how hehe */}
        <ul class="nav-list text-xl font-base text-black">
          <li>
            <a href="#Home" className="hover:text-custom-blue">
              Home
            </a>
          </li>
          <li>
            <a href="#Info" className="hover:text-custom-blue">
              Info
            </a>
          </li>
          <li>
            <a href="#Academic" className="hover:text-custom-blue">
              Academic
            </a>
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
