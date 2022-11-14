import React from "react";
import "./App.css";
import Nav from "./Nav";
import Foot from "./Foot";
import Intro from "./Intro";
import Card from "./Card";
import Content from "./Content";

const cardContents = [
  {
    title: "CONVERGENCE",
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Voluptatibus quia, nulla! Maiores et perferendis eaque,
				exercitationem praesentium nihil.`,
  },
  {
    title: "THE EXECUTIVE BOARD",
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Voluptatibus quia, nulla! Maiores et perferendis eaque,
				exercitationem praesentium nihil.`,
  },
  {
    title: "TIMELINE",
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Voluptatibus quia, nulla! Maiores et perferendis eaque,
				exercitationem praesentium nihil.`,
  },
  {
    title: "STUDENT WELFARE",
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Voluptatibus quia, nulla! Maiores et perferendis eaque,
				exercitationem praesentium nihil.`,
  },
  {
    title: "RELATIONS & COMMUNICATIONS ",
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Voluptatibus quia, nulla! Maiores et perferendis eaque,
				exercitationem praesentium nihil.`,
  },
  {
    title: "INTERNAL AFFAIRS",
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Voluptatibus quia, nulla! Maiores et perferendis eaque,
				exercitationem praesentium nihil.`,
  },
  {
    title: "HUMAN RESOURCES",
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Voluptatibus quia, nulla! Maiores et perferendis eaque,
				exercitationem praesentium nihil.`,
  },
  {
    title: "ENTREPRENEURSHIP",
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Voluptatibus quia, nulla! Maiores et perferendis eaque,
				exercitationem praesentium nihil.`,
  },
  {
    title: "RESEARCH & PROFESSION",
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Voluptatibus quia, nulla! Maiores et perferendis eaque,
				exercitationem praesentium nihil.`,
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
  return (
    <div className="">
      <Nav />
      <div className="pt-20 pb-8">
        <section class=" bg-custom-white flex items-center content-between place-content-center">
          <div class="grid grid-cols-3">
            {cardContents.map(({ title, content }) => (
              <Card title={title} content={content} />
            ))}
          </div>
        </section>
        <div></div>
      </div>
      <Foot />
    </div>
  );
}
//I think we need to make the app as a segment for the page itself
//only then the app can contain the cards

export default App;
