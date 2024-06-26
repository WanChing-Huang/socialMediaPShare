//still work on it

const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const uuid = require('uuid').v4;

const app = express();
const PORT = 3000;

const sessions = require('./session');
//import { Session, getSessionUser }from('./sessions');
const users = require('./users');
//import {User, isValidUsername,isValidPassword }from ('./users');

app.use(cookieParser());
app.use(express.json());
app.use(express.static('./src'));


mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

//

const user = new users.User({
  username : 'wendyssQ222',
  password : 'wendyssQ222',
 }
)
user.save().then(savedUser => {
  console.log('user-saved-successful:', savedUser);
})
.catch(err => {
  console.error('user-saved-error:', err);
});;

// Sessions
// Check session (get if login or not)
//while use the /:userid url
app.get('/api/session', (req, res) => {
  const sid = req.cookies.sid;
                                        //maybe not correct
  const username = sid ? sessions.getSessionUser(sid, sessions.Session).username : '';
  if(!sid || !username) { 
    res.json({ loginStatus: 'notLoggedIn', username });
    return;
  }
  res.json({ loginStatus: 'loggedIn', username }); //maybe add another info!!!!!!!!!!!
});


// generate a new session
app.post('/api/session',async (req, res) => {
  const { username, password } = req.body;
  const sid = req.cookies.sid;
  //validation
  if (!users.isValidUsername(username)) {
    res.status(400).json({ error: 'required-valid-username' });
    return;
  }
  
  //check if user exist
  ////這邊不知為何會返回一組新的objID
  const user =await users.User.findOne({ username:username, password:password },{ _id: {
      "$toString": "$_id"
    }}).exec();
  if(!user) {
    res.status(401).send('invalid-ID-or-password');
  }
  const userId = user;
  console.log(userId+'in post session')
  const session = new sessions.Session({
    sessionId:uuid(),
    userId: userId, 
    //make sure this user is the const user in this function 
  });

   session.save().then(savedSession => {
    console.log('session-saved-successful:', savedSession);
  })
  .catch(err => {
    console.error('session-saved-error:', err);
  });;;
  res.cookie('sid', sid);
  res.json({ username , userId });  
});

//register 
//notic password validation
//make sure to have check username is used or not
app.patch('/api/session',async  (req, res) => {
  const { username, password } = req.body;
   
  //username validation
  if (!users.isValidUsername(username)) {
    res.status(400).json({ error: 'required-valid-username' });
    return;
  }
  
  //username is used or not
  const usedUser =await users.User.findOne({ username });
  if(usedUser) {
    res.status(400).json({ error: 'duplicate-username' });
    return;
  }
  
  //password validation
  if (!users.isValidPassword(password)) {
    res.status(400).json({ error: 'required-valid-password' });
    return;
  }

  //create a new user
  const user = new users.User({
     username : username,
     password : password,
    }
  )
  await user.save();
  res.json({ registerStatus : 'register-successful' });  
})

//logout
//maybe no need this!!!!!!!!!!
app.delete('/api/session', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';

  if(sid) {
    res.clearCookie('sid');
  }

  if(username) {
    // Delete the session, but not the user data
    sessions.deleteSession(sid);
  }

  res.json({ wasLoggedIn: !!username }); 
});


//get to user/:userId page

app.get('/api/user/::id',async (req, res) => {
  const { userID } = req.params ;
  console.log('in get userid'+userID);
  const user = await users.User.findOne({ _id :userID });
  console.log(user);
  if (user) {
    res.json(Object.values(user));
  } else {
    res.status(404).send('user-not-found');
  }
})




app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
