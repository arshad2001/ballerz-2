import React from "react";
import "./card.css";
import image from "./assets/convergence-blue.png";

function Card({ title, content, image }) {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className="bg-right-top h-[270px] w-[360px] hover:scale-105 hover:shadow-2xl overflow-hidden border border-custom-blue 
        hover:bg-custom-blue hover:text-white transition duration-300 ease-in-out event cursor-pointer"
      >
        <div class="px-4 py-4">
          <div class="text-[12px]">{content}</div>
          <p class="font-bold text-[24px] mb-4 ">{title}</p>
          {/* <img src="/assets/logo-colored.png" /> */}
        </div>
      </div>
    </div>
  );
}

export default Card;
