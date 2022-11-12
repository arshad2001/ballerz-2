import React from "react";
import "./card.css";
import image from "./assets/convergence-blue.png";

function Card({ title, content }) {
  return (
    <div>
      <div class="h-52 w-80 hover:scale-105 hover:shadow-2xl overflow-hidden border bg border-custom-blue hover:bg-custom-blue hover:text-white transition duration-300 ease-in-out event cursor-pointer">
        <div class="px-4 py-4">
          <div class="font-bold text-lg mb-4">{title}</div>
          <p class="text-sm">{content}</p>
          {/* <img src="/assets/logo-colored.png" /> */}
        </div>
      </div>
    </div>
  );
}

export default Card;
