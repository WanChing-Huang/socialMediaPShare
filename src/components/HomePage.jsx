import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = ({ userName }) => {
  return (
    <div className="home-page">
      <div className="header">
    
      </div>
      <div className="profile">
        <img src="profile-pic-placeholder.png" alt="User" className="profile-pic" />
        <h1>`${userName}`</h1>
        <div className="actions">
          <button>multiple choice</button>
          <button>Edit</button>
        </div>
      </div>
      <div className="apps">
        <div className="app">
          <img src="contact-icon.png" alt="Contact" />
          <span>Contact</span>
        </div>
        <div className="app">
          <img src="facebook-icon.png" alt="Facebook" />
          <span>Facebook</span>
        </div>
        <div className="app">
          <img src="instagram-icon.png" alt="Instagram" />
          <span>Instagram</span>
        </div>
        <Link to="/add">
          <div className="app add">
            <span>+</span>
            <span>Add</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
