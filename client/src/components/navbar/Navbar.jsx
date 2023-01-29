import { Link } from 'react-router-dom';
import './navbar.scss';
const Navbar = () => {
  return (
    <div className="navbar">
      <span>Booking</span>
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
    </div>
  );
};
export default Navbar;
