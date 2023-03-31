import React from "react";
import Card from "../Card/Card";
import "../Card/card.css";
import "./home.css";
import {  useNavigate, Link  } from "react-router-dom";
function Home() {
  const data = [
    {
      title: "Welcome to our Website",
      description: "This is the landing page of the website after logging in.",
    },
    {
      title: "What we offer",
      description:
        "We offer a wide range of services to help you grow your business, including web development, SEO, and marketing.",
    },
    {
      title: "Our Team",
      description:
        "Our team consists of experienced professionals who are dedicated to helping you achieve your goals.",
    },
  ];

  return (
    <div>
      <nav>
        <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/jobs'>Jobs</Link>
        <Link to='/'>Logout</Link>
      </nav>
    
    <div className="home-container">
    
      <h1 className="home-title">Welcome to our Website</h1>
      <div className="cards-container">
        {data.map((item, index) => (
          <Card key={index} title={item.title} description={item.description} />
        ))}
      </div>
      <div className="cta-container">
        <button className="cta-button">Get started</button>
      </div>
    </div>
    </div>
  );
}

export default Home;
