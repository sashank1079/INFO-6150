import React from "react";
import Card from "../Card/Card";
import "../Card/card.css";


function Profile(){
    const data = [
        { title: "Profile Page", description: "This is the Profile page which will display the users name and email ID and other necessary details."},
      ];
    
      return (
        <div>
        <h1>This is the profile page</h1>
        <div className="cards-container">
          {data.map((item, index) => (
            <Card key={index} title={item.title} description={item.description}/>
          ))}
        </div>
        </div>
      );
}

export default Profile