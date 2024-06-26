
import { useState } from 'react';


function LoginForm({ onLogin }) {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function onChangeUsername(e) {
    setUsername(e.target.value);
  }


  function onChangePassword(e) {
    setPassword(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault(); 
    //console.log(username+password);
    if(username && password) {  
      onLogin(username, password); 
    }
  }
 //action="#/login"
 
  //need a register button and register page or something else???
  //為了確認是用戶必須要有認證步驟 是否用這個認證有待商榷
  return (
      <div className="login">
        <h2 className='login_title'></h2>
        <form className="login__form"  onSubmit={onSubmit}>
          <label>
            <span>Username:</span>
            <input className="login__username" value={username} onChange={onChangeUsername}/>
          </label>
          <label>
            <span>Password:</span>
            <input className="login__password" value={password} onChange={onChangePassword}/>
          </label>
          <button className="login__button" type="submit">Login</button>
        </form>
      </div>
  );

}

export default LoginForm;
