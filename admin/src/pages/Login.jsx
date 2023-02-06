import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './login.scss';
const Login = () => {
  const navigate = useNavigate();
  // /auth/login [email, password]
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/auth/login`, {
        email,
        password,
      });

      debugger;

      navigate('/');
    } catch (error) {
      debugger;
    }
  };

  return (
    <div className="login">
      <form>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>LOGIN</button>
      </form>
    </div>
  );
};
export default Login;
