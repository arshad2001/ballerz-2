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
        className=" bg-[top_.5px_left_-.5px] bg-contain bg-no-repeat h-[200px] w-[280px] hover:scale-105 hover:shadow-2xl overflow-hidden border
        border-custom-blue hover:text-white hover:bg-custom-blue
        transition duration-300 ease-in-out"
      >
        <div className="px-3 py-3 h-[100px]">
          <p className="text-[12px]">{content}</p>
          <p className="font-bold text-[20px]">{title}</p>
        </div>
        <div className="text-[12px] px-4 py-4 h-[100px] pl-44 pt-16 flex flex-row">
          <p className="pr-[4px]  event cursor-pointer">lihat detail </p>
          <p className=" event cursor-pointer"> -> </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
