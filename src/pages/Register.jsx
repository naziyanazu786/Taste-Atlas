import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";  // Import CSS
import '../styles/shared.css'
import Login from "./Login";

const Register = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:5000/register", 
        { 
          username, 
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
        localStorage.setItem("username", username);
        setIsLoggedIn(true);
        navigate("/home");
      }
    } catch (error) {
      if (error.response) {
        // Server responded with error
        alert(error.response.data.message || "Registration failed");
      } else if (error.request) {
        // No response received
        alert("Cannot connect to server. Please try again later.");
      } else {
        // Other errors
        alert("An error occurred. Please try again.");
      }
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="page-background">
      <div className="content-wrapper">
        <div className="container">
          <div className="auth-card">
            <h2>Register</h2>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleRegister}>Register</button>
            <p>Already have an account? <Link to="/login">Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
