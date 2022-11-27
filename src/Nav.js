import React from "react";
import "./nav.css";
import logoColored from "./assets/logo-colored.png";
import logoText from "./assets/logo-colored-text.png";

function Nav() {
  return (
    // <div className="nav-background shadow-md  bg-black text-white	bac">
    <div className="w-full bg-white/20 backdrop-blur-[2px] shadow-md text-black fixed z-50">
      <nav class="w-4/5 h-15 grid grid-cols-2 m-auto items-center">
        <div className="flex w-max py-3 center justify-start hover:scale-110 transition duration-200 ease-in-out">
          <img src={logoColored} className="max-w-32px mr-2" />
          <a className="text-xl font-bold self-center cursor-pointer">
            HIMATEKKOM ITS
          </a>
          {/* <a className='font-size-16 font-weight-bold'>HIMATEKKOM</a> */}
        </div>
        {/* ini bisa banget pake component, but still dunno how hehe */}
        <ul class=" w-4/5 flex content-right justify-end justify-self-end text-xl font-base ">
          <li>
            <a href="#Home" className="hover:text-custom-blue ">
              Home
            </a>
          </li>
          <li>
            <a href="#Info" className="hover:text-custom-blue pl-6">
              Info
            </a>
          </li>
          <li>
            <a href="#Academic" className="hover:text-custom-blue pl-6">
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
