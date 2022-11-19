import React from "react";
import "./card.css";
import image from "./assets/convergence-blue.png";

function Card({ title, content, image, hover }) {
  function changeBackground(e) {
    e.target.style.background = `url(${image})`;
  }

  //div line 12 kasih ini onMouseOver={changeBackground}
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className="bg-[top_.5px_left_-.5px] bg-contain bg-no-repeat h-[200px] w-[280px] hover:scale-105 hover:shadow-2xl overflow-hidden border
        border-custom-blue hover:text-white hover:bg-custom-blue
        transition duration-300 ease-in-out event cursor-pointer"
      >
        <div class="px-4 py-4">
          <div class="text-[10px]">{content}</div>
          <p class="font-bold text-[20px] mb-4 ">{title}</p>
          {/* <img src="/assets/logo-colored.png" /> */}
        </div>
      </div>
    </div>
  );
}

export default Card;
