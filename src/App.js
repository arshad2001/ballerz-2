import React, { useEffect } from "react";
import "./App.css";
import Nav from "./Nav";
import Foot from "./Foot";
import Intro from "./Intro";
import Card from "./Card";
import Content from "./Content";

const cardContents = [
  {
    title: "CONVERGENCE",
    content: "CONVERGENCE",
    image: "./convergence-blue.png",
    hover: "./convergence-blue.png",
  },
  {
    title: "THE EXECUTIVE BOARD",
    content: "CONVERGENCE",
    image: "./exec-blue.png",
    hover: "./exec-blue.png",
  },
  {
    title: "TIMELINE",
    content: "CONVERGENCE",
    image: "./convergence-blue.png",
    hover: "./convergence-blue.png",
  },
  {
    title: "STUDENT WELFARE",
    content: "CONVERGENCE",
    image: "./studfare-blue.png",
    hover: "./studfare-blue.png",
  },
  {
    title: "RELATIONS & COMMUNICATIONS ",
    content: "CONVERGENCE",
    image: "./relcom-blue.png",
    hover: "./relcom-blue.png",
  },
  {
    title: "INTERNAL AFFAIRS",
    content: "CONVERGENCE",
    image: "./internal-blue.png",
    hover: "./internal-blue.png",
  },
  {
    title: "HUMAN RESOURCES",
    content: "CONVERGENCE",
    image: "./hrd-blue.png",
    hover: "./hrd-blue.png",
  },
  {
    title: "ENTREPRENEURSHIP",
    content: "CONVERGENCE",
    image: "./entr-blue.png",
    hover: "./entr-blue.png",
  },
  {
    title: "RESEARCH & PROFESSION",
    content: "CONVERGENCE",
    image: "./respro-blue.png",
    hover: "./respro-blue.png",
  },
];

/*
Jadi dalem app tuh harus udah ada semuanya
so,,, apa yang ada di index direplace aja sama app. why? cuz it's THE WAY~
heres the plan
app dalem index
trus component2 lain dalem app
this is the task for today yessir bismillah
*/

function App() {
  useEffect(() => {
    document.body.className = "snap-mandatory snap-y";
  }, []);

  return (
    <div pages={2} style={{ top: "0", left: "0" }}>
      <div className="h-fit w-screen overflow-hidden">
        <Nav className="bg-black" />
        <div className="pt-[53.49px]">
          <div
            className="snap-center shrink-0"
            style={{
              scrollSnapPointsY: "repeat (100vh)",
            }}
          >
            {" "}
            <Intro />
          </div>
          {/* <div className="shrink-0">
            {" "}
            <Content />
          </div> */}
          <div className="snap-center shrink-0 h-fit py-[128px] bg-[url('./assets/ellipse11.png')] bg-[length:1300px] bg-no-repeat bg-center">
            <section class="flex items-center content-between place-content-center">
              <div class="bg-custom-white  grid grid-cols-3">
                {cardContents.map(({ title, content, image }) => (
                  <Card title={title} content={content} image={image} />
                ))}
              </div>
            </section>
          </div>
          <Foot className="" />
        </div>
      </div>
    </div>
  );
}
//I think we need to make the app as a segment for the page itself
//only then the app can contain the cards

export default App;
