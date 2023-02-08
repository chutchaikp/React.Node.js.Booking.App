import {
  MdCircleNotifications,
  MdDashboard,
  MdDeliveryDining,
  MdHealthAndSafety,
  MdLogout,
  MdSettingsApplications,
} from 'react-icons/md';
import { FaJediOrder, FaProductHunt, FaUserAstronaut } from 'react-icons/fa';
import { GiRamProfile } from 'react-icons/gi';
import { FcStatistics } from 'react-icons/fc';

import { DiProlog } from 'react-icons/di';

import './sidebar.scss';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1 className="logo"> Sidebar </h1>

      <div className="title">Main</div>
      <ul>
        <li>
          <Link to="/">
            <MdDashboard />
            Dashboard
          </Link>
        </li>
      </ul>

      <div className="title">lists</div>
      <ul>
        <li>
          <Link to="/user">
            <FaUserAstronaut />
            Users
          </Link>
        </li>
        <li>
          <Link to="/hotel">
            <FaProductHunt />
            Hotel
          </Link>
        </li>
        <li>
          <Link to="/room">
            <FaJediOrder />
            Room
          </Link>
        </li>
        <li>
          <MdDeliveryDining />
          Delivery
        </li>
      </ul>

      <div className="title">useful</div>
      <ul>
        <li>
          <FcStatistics />
          stats
        </li>
        <li>
          <MdCircleNotifications />
          Notifications
        </li>
      </ul>

      <div className="title">Services</div>
      <ul>
        <li>
          <MdHealthAndSafety />
          System Health
        </li>
        <li>
          <DiProlog />
          Logs
        </li>
        <li>
          <MdSettingsApplications />
          Settings
        </li>
      </ul>

      <div className="title">User</div>
      <ul>
        <li>
          <GiRamProfile />
          Profile
        </li>
        <li>
          <MdLogout />
          Logout
        </li>
      </ul>

      <div className="theme">
        <div className="light"></div>
        <div className="dark"></div>
      </div>
    </div>
  );
};
export default Sidebar;
