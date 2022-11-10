import React from "react";
import "./card.css";
import image from "./assets/convergence-blue.png";

function Card({ title, content }) {
  return (
    <div>
      <div class="h-52 overflow-hidden border border-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out event">
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
