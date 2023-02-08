import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './app.scss';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Sort from './pages/Sort';
import Sort2 from './pages/Sort2';
import Sort3 from './pages/Sort3';
import User from './pages/User';
import UserV2 from './pages/UserV2';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div className="app">
        <Navbar />
        <Outlet />
      </div>
    ),
    children: [
      { path: '/', element: <Home /> },
      { path: '/home', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/user', element: <User /> },
      { path: '/userv2', element: <UserV2 /> },
      { path: '/sort', element: <Sort /> },
      { path: '/sort2', element: <Sort2 /> },
      { path: '/sort3', element: <Sort3 /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
