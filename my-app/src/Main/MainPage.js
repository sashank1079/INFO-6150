import React from "react";
import { Link} from "react-router-dom";
import "../Main/MainPage.css";

export default function MainPage() {
  return (
    <div>
      <nav>
        <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/jobs'>Jobs</Link>
      </nav>
    </div>
  );
}
