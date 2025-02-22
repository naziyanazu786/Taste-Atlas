import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img 
            src="/f9.webp"  // Updated to use the new logo
            alt="Taste Atlas" 
            className="navbar-brand-logo"
          />
        </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Center Menu Items */}
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/search">Search Recipe</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/saved">Saved Recipes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create">Create Recipe</Link>
            </li>
          </ul>
          
          {/* Right-aligned Auth Buttons */}
          <div className="navbar-nav ms-auto">
            <Link className="nav-link btn btn-outline-primary me-2" to="/login">Login</Link>
            <Link className="nav-link btn btn-primary" to="/register">Register</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
