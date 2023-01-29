
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './app.scss'
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import List from './pages/List';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div className='app'>
      <div>
        <Navbar />
        <Header />
      </div>
      <Outlet />
      <Footer />
    </div>,
    children: [
      { path: '/', element: <Home /> },
      { path: '/home', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/list', element: <List /> },
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
