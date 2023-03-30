import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginPage.css";

export default function LoginPage({...props}){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSignIn = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/login', { email, password });
            console.log(response.data);
            props.handle();
            navigate('/home');
        } catch (error) {
            console.error(error);
            if (error.response && error.response.status === 401) {
                setErrorMessage("Invalid email or password");
            } else {
                setErrorMessage("An unexpected error occurred");
            }
        }
    };

    return(
        <div className="login-page">
            <h1> Login Page</h1>
            <form>
                <label>
                    Email:
                    <input type="text" className="login-input" value={email} onChange={(event) => setEmail(event.target.value)} />
                </label>
                <br/>
                <label>
                    Password:
                    <input type="password" className="login-input" value={password} onChange={(event) => setPassword(event.target.value)} />
                </label>
                <br/>
                <button type="submit" className="login-button" onClick={handleSignIn}>Sign In</button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
        </div>
    )
}
