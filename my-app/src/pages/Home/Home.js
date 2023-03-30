import React from "react";
import Card from "../Card/Card";
import "../Card/card.css";

function Home() {
  const data = [
    { title: "Home page", description: "This is the landing page of the wbsite after logging in to the website."},
  ];

  return (
    <div>
        <h1>This is the Home page</h1>
        <div className="cards-container">
          {data.map((item, index) => (
            <Card key={index} title={item.title} description={item.description}/>
          ))}
        </div>
        </div>
  );
}

export default Home;
