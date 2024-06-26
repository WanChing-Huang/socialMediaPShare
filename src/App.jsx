import React from 'react';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { fetchLogin,fetchUserPage } from './service';
import { LOGIN_STATUS } from './constants.js';

import HomePage from './components/HomePage';
import AddPage from './components/AddPage';
import LoginPage from './components/LoginPage';






const App = () => {

  const [ error, setError ] = useState('');
  const [ username, setUsername] = useState('');
  const [ loginStatus, setLoginStatus] = useState(LOGIN_STATUS.NOT_LOGGED_IN);
  const [ isPagePending, setIsPagePending ] = useState(false);

  //still work on it
  //automatic redirect
  // useEffect(
  //   () => {
  //     checkSession();
  //   },
  //   [] 
  // );

  function checkSession() {
    setError(''); // add message component to handle 
    fetchSession().
      then(data => {
        // res.json({ loginStatus: 'loggedIn', username })
        setLoginStatus(data.loginStatus);
        setUsername(data.username);

      }
      ).catch(err => {
        setError(err?.error || 'ERROR');
      });

  }



  //is the frontend side 
  //fetch mean to pull data from server
  // history.push(`/user/${username}`);


  //path for public or user itself is the same 
  //so the different is the state is login or not log in  


  function onLogin(username ,password) {
    setError('');
    setIsPagePending(true);
    fetchLogin(username, password)
      .then(
        session => {
          setUsername(session.username);
          console.log(username);//we have it
          setLoginStatus(LOGIN_STATUS.IS_LOGGED_IN);
          setIsPagePending(false);
          const userID = session.userID;
          console.log(userID);
          return fetchUserPage(userID);
        }
      )
      .catch(err => {
        setError(err?.error || 'ERROR');
      }).then(
        userData =>{
           console.log(userData);
           const navigate = useNavigate();
          navigate(`/user/${userData._id}`)
        })
      ;
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage onLogin={onLogin} />} />
        <Route path="/user/::userId" element={<HomePage userName={username} />} />
        <Route path="/add" element={<AddPage />} />
      </Routes>
    </Router>
  );
};

export default App;
