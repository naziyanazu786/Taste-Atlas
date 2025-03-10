import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Auth.css"; // We'll create this shared auth styling

const Register = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      // Validate inputs
      if (!username || !email || !password) {
        setError("All fields are required");
        return;
      }

      // Check if user already exists
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const userExists = existingUsers.some(user => user.email === email);
      
      if (userExists) {
        setError("Email already registered");
        return;
      }

      // Create new user
      const newUser = {
        id: Date.now(),
        username,
        email,
        password
      };

      // Save user
      localStorage.setItem('users', JSON.stringify([...existingUsers, newUser]));
      localStorage.setItem('currentUser', JSON.stringify(newUser));
      localStorage.setItem('isLoggedIn', 'true');
      
      setIsLoggedIn(true);
      navigate('/home');
    } catch (error) {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <h2>Register</h2>
          {error && <div className="error-message">{error}</div>}
          <div className="form-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="auth-button" onClick={handleRegister}>
            Register
          </button>
          <p className="auth-link">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
