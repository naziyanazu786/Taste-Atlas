import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Welcome.css'

const Welcome = () => {
  return (
    <div 
      className="welcome-container" 
      style={{ backgroundImage: `url('/f8.jpg')` }}  // Updated to use image from public folder
    >
      <div className="welcome-content">
        <h1>Welcome to Taste Atlas</h1>
        <p>Discover, Create, and Share Amazing Recipes</p>
        <div className="welcome-buttons">
          <Link to="/register" className="welcome-btn register-btn">Get Started</Link>
          <Link to="/login" className="welcome-btn login-btn">Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Welcome 