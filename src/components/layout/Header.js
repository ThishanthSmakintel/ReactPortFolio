import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="app-header bg-dark py-3">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <Link to="/" className="navbar-brand">React App</Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <a 
                  className="nav-link dropdown-toggle" 
                  href="#" 
                  id="navbarDropdown" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  Projects
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/crud" className="dropdown-item">CRUD operation</Link>
                  </li>
                  <li>
                    <Link to="/guessTheNumber" className="dropdown-item">Guess The Number</Link>
                  </li>
                  <li>
                    <Link to="/ImageGallery" className="dropdown-item">Image Gallery</Link>
                  </li>
                  <li>
                    <Link to="/viewToDoList" className="dropdown-item">viewToDoList</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">view CV</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
