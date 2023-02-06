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

import './sitebar.scss';
const Sitebar = () => {
  return (
    <div className="sitebar">
      <h1 className="logo"> Sitebar </h1>

      <div className="title">Main</div>
      <ul>
        <li>
          <MdDashboard />
          Dashboard
        </li>
      </ul>

      <div className="title">lists</div>
      <ul>
        <li>
          <FaUserAstronaut />
          Users
        </li>
        <li>
          <FaProductHunt />
          Products
        </li>
        <li>
          <FaJediOrder />
          Orders
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
export default Sitebar;
