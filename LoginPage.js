import React, { useState } from 'react';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    console.log('Login Credentials:', { username, password });

    onLogin();
  };

  return (
    
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
    
      
      <form onSubmit={handleLogin} style={{ maxWidth: '500px', width: '70%', padding: '10px', borderRadius: '8px', background: 'grey' }}>
      <h2><center>Log in</center></h2>
        <label>
          Username:
          <center>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value) } required /></center>
        </label>

        <br />
        <label>
        
          Password:

          <center>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          </center>
        </label>
        <br />
        <button class="pass">Forgot Password?</button><div></div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
