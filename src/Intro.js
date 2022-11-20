import React from "react";
import "./App.css";

function Foot() {
  return (
    <div className="h-[400px] w-screen m-auto grid grid-cols-2 bg-[url('./assets/elipse.png')]">
      <div className="">Gambar</div>
      <div className="bg-custom-yellow ">
        <p className="">Slogan</p>
      </div>
    </div>
  );
}

export default Foot;
