import React from "react";
import "./App.css";
import Nav from "./Nav";
import Foot from "./Foot";

import Card from "./Card";

const cardContents = [
  {
    title: "Machine Learning",
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.`,
  },
  {
    title: "The Coldest Sunset",
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.`,
  },
  {
    title: "The Coldest Sunset",
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.`,
  },
  {
    title: "The Coldest Sunset",
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.`,
  },
  {
    title: "The Coldest Sunset",
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.`,
  },
];

function App() {
  return (
    <>
	
      <Nav />
      <div>
        <section class="section">
          <div class="grid grid-cols-4">
            {cardContents.map(({ title, content }) => (
              <Card title={title} content={content} />
            ))}
          </div>
        </section>
      </div>
      <Foot />
    </>
  );
}
//make the app 

export default App;
