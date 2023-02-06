import './app.scss'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Sitebar from './components/Sidebar';
import User from './pages/User';
import Login from './pages/Login';
import Sort from './pages/Sort';
import ShowHide from './pages/ShowHide';
import UserCreate from './pages/UserCreate';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div className="app">
      {/* <Navbar /> */}
      <Sitebar />
      <Outlet />
    </div>,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/user', element: <User /> },
      { path: '/newuser', element: <UserCreate /> },
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
