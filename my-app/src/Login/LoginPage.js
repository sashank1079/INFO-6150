import React, { useState, useEffect, Redirect } from "react";
// import React, { useState, useEffect, useHistory } from "react";
import {  useNavigate, Link  } from "react-router-dom";
import "../Login/LoginPage.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate =  useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:8000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json","access-control-allow-origin":"*",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      navigate("/home");
        // return <Redirect to="/home" />
    } else {
      const error = await response.json();
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    // Check if user is already logged in and redirect to dashboard or home page
  }, []);

  return (
    
    <div className="container">
      <h1 className="title">Login</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} required />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
