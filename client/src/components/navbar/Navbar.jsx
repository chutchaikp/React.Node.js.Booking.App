import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './navbar.scss';
const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <span className="logo">
        <Link to="/">Booking</Link>
      </span>

      {user ? (
        <>{user.username}</>
      ) : (
        <>
          <div className="menus">
            <ul>
              <li>
                <Link to="/home">Register</Link>
              </li>
              <li>
                <Link to="/about">Login</Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};
export default Navbar;
