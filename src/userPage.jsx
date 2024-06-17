// src/UserPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

function UserPage() {
  const { username } = useParams();

  return (
    <div>
      <h1>User Page</h1>
      <p>Username: {username}</p>
    </div>
  );
}

export default UserPage;
