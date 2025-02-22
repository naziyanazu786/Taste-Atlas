import React, {useState} from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import '../App.css'
import '../styles/shared.css'

const Login = ({setIsLoggedIn}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post("http://localhost:5000/login", 
                { 
                    email, 
                    password 
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );

            if (response.data) {
                localStorage.setItem("username", response.data.username);
                setIsLoggedIn(true);
                navigate("/home");
            }
        } catch (error) {
            if (error.response) {
                // Server responded with error
                alert(error.response.data.message || "Invalid credentials");
            } else if (error.request) {
                // No response received
                alert("Cannot connect to server. Please try again later.");
            } else {
                // Other errors
                alert("An error occurred. Please try again.");
            }
            console.error("Login error:", error);
        }
    }

  return (
    <div className="page-background">
      <div className="content-wrapper">
        <div className="container">
          <div className="auth-card">
            <h2>Login</h2>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            <p>New user? <Link to="/register">Register</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
