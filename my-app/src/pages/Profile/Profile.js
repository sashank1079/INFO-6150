import React from "react";
import Card from "../Card/Card";
import "../Card/card.css";
import {Link} from "react-router-dom";

function Profile(){
    const data = [
        { title: "Profile Page", description: "This is the Profile page which will display the users name and email ID and other necessary details."},
      ];


  return (
    <div>
    <div>
  <nav>
    <Link to='/home'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/profile'>Profile</Link>
    <Link to='/jobs'>Jobs</Link>
    <Link to='/'>Logout</Link>
  </nav>
</div>
    <h1>This is the profile page</h1>
    <div className="cards-container">
      {data.map((item, index) => (
        <Card key={index} title={item.title} description={item.description}/>
      ))}
    </div>
    </div>
  );
      }

export default Profile;