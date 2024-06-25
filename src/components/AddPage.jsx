import React from 'react';
import { Link } from 'react-router-dom';
import './AddPage.css';

const AddPage = () => {
  const appIconStyle = {
    width: '60px',
    height: '60px',
  };

  return (
    <div className="add-page">
      <div className="header">
        {/* Header content */}
      </div>
      <h2>Select the app you want to add</h2>
      <div className="apps">
        {[
          '/icon/linkedin.png',
          '/icon/facebook.png',
          '/icon/instagram.png',
          '/icon/twitter.png',
          '/icon/wechat.png',
          '/icon/snapchat.png',
          '/icon/line.png',
          '/icon/tiktok.png',
        ].map((icon, index) => (
          <div className="app" key={index}>
            <img src={icon} alt={`App ${index}`} style={appIconStyle} />
          </div>
        ))}
      </div>
      <Link to="/">Back</Link>
    </div>
  );
};

export default AddPage;
