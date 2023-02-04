import axios from 'axios';

import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

import './login.scss';

const Login = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setCredentials((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post(
        '/auth/login',

        { ...credentials, email: credentials.username }
      );
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });

      navigate('/');
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
    }
  };

  return (
    <div className="login">
      <form>
        <input
          type="text"
          placeholder="username"
          name="username"
          id="username"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="password"
          name="password"
          id="password"
          onChange={handleChange}
        />
        <button disabled={loading} onClick={handleLogin}>
          LOGIN
        </button>

        <p>{error}</p>
      </form>
    </div>
  );
};
export default Login;
