import React, { useState, useContext } from 'react';
import UserContext from '../assets/Context/context';

function Login() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type='text'
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        placeholder='Username'
      />
      {'  '}
      <input
        type='text'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
      ></input>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
