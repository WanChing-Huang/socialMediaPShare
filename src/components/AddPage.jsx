import React from 'react';
import { Link } from 'react-router-dom';
import './AddPage.css';

const AddPage = () => {
  return (
    <div className="add-page">
      <div className="header">
       
      </div>
      <h2>Select the app you want to add</h2>
      <div className="apps">
        {[
          'contact-icon.png',
          'facebook-icon.png',
          'instagram-icon.png',
          'x-icon.png',
          'wechat-icon.png',
          'snapchat-icon.png',
          'line-icon.png',
          'tiktok-icon.png',
        ].map((icon, index) => (
          <div className="app" key={index}>
            <img src={icon} alt={`App ${index}`} />
          </div>
        ))}
      </div>
      <Link to="/">Back</Link>
    </div>
  );
};

export default AddPage;
