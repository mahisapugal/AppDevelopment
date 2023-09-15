import React, { useState } from 'react';
import './Login.css'; // Import the CSS file
import{BrowserRouter,Routes,Route,Redirect,Link} from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // You can add your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login-button" type="button" onClick={handleLogin}>
          Login
        </button>
        <p>Already Have an Account</p>
        <Link to ="/register">
        <button className="login-button" type="button" onClick={handleLogin}>
          Register</button></Link>

      </form>
    </div>
  );
}

export default Login;