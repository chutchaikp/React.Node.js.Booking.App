import './app.scss'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
import Sitebar from './components/Sidebar'
import User from './pages/User';
import Login from './pages/Login';
import Sort from './pages/Sort';
import ShowHide from './pages/ShowHide';
import UserCreate from './pages/UserCreate';
import Hotel from './pages/Hotel';
import HotelCreate from './pages/HotelCreate'
import Room from './pages/Room';
import RoomCreate from './pages/RoomCreate';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div className="app">
      <Sitebar />
      <Outlet />
    </div>,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/user', element: <User /> },
      { path: '/newuser', element: <UserCreate /> },
      { path: '/hotel', element: <Hotel /> },
      { path: '/hotelcreate', element: <HotelCreate /> },
      { path: '/room', element: <Room /> },
      { path: '/roomcreate', element: <RoomCreate /> },
    ]
  },
  { path: '/login', element: <Login /> },
  { path: '/sort', element: <Sort /> },
  { path: '/showhide', element: <ShowHide /> }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}



export default App;
