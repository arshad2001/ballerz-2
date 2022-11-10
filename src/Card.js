import React from "react";
import "./card.css";

function Card({ title, content }) {
  return (
    <div>
      <div class="max-w-sm overflow-hidden border border-sky-500">
        <div class="px-8 py-8">
          <div class="font-bold text-xl mb-2">{title}</div>
          <p class="text-gray-700 text-base">{content}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
