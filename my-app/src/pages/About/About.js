import React from "react";
import Card from "../Card/Card";
import "../Card/card.css";
function About(){
    const data = [
        { title: "About page", description: "This is the page where the job portal website will display their list of services and other navigation links"},
      ];
    
      return (
        <div>
        <h1>This is the About page</h1>
        <div className="cards-container">
          {data.map((item, index) => (
            <Card key={index} title={item.title} description={item.description}/>
          ))}
        </div>
        </div>
      )
}

export default About