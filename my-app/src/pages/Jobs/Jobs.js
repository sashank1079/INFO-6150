import React from "react";
import Card from "../Card/Card";
import "../Card/card.css";
import {Link} from "react-router-dom";

function Job(props) {
  return (
    <Card title={props.title} description={props.description} />
  );
}

function Jobs() {
  const jobData = [];

  // Use a loop to create job data and push to jobData array
  for (let i = 1; i <= 3; i++) {
    jobData.push({
      title: `Job ${i}`,
      description: `This is Job ${i} description.`
    });
  }

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
  
      <h1>This is the Jobs page</h1>
      <h2>The jobs can be listed in the card components in a proper style</h2>
      <div className="cards-container">
        {jobData.map((job, index) => (
          <Job key={index} title={job.title} description={job.description} />
        ))}
      </div>
    </div>
    </div>
  );
}

export default Jobs;
