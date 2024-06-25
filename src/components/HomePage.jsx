import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {

  return (
    <div className="home-page">
      <div className="header">
    
      </div>
      <div className="profile">
        <img src="profile-pic-placeholder.png" alt="User" className="profile-pic" />
        <h1>User Name</h1>
        <div className="actions">
          <button>multiple choice</button>
          <button>Edit</button>
        </div>
      </div>
      <div className="apps">
        <div className="app">
          <img src="/icon/tiktok.png" alt="Contact" style={{ width: '50px', height: '50px' }} />
        </div>
        <div className="app">
          <img src="/icon/linkedin.png" alt="Facebook" style={{ width: '50px', height: '50px' }}/>
        </div>
        <div className="app">
          <img src="/icon/instagram.png" alt="Instagram" style={{ width: '50px', height: '50px' }}/>
        </div>
        
        <Link to="/add">
          <div className="app add">
          <div className="app">
            <img src="/icon/add-button.png" alt="Instagram" style={{ width: '60px', height: '60px' }}/>
        </div>
            
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
