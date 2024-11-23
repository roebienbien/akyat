import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import LoginForm from './components/ui/forms/LoginForm';
import RegisterForm from './components/ui/forms/RegisterForm';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import TrailPage from './sections/trails-section/TrailPage';
import Trails from './sections/trails-section/Trails';
import HostPage from './pages/host/HostPage';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFoundPage />,
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/trails',
        element: <Trails />,
        children: [],
      },
      {
        path: '/trails/:trailId',
        element: <TrailPage />,
      },
      {
        path: '/host',
        element: <HostPage />,
        children: [],
      },
      {
        path: '/login',
        element: <LoginForm />,
      },
      {
        path: '/register',
        element: <RegisterForm />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginForm />,
  },
  {
    path: '/register',
    element: <RegisterForm />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// <Hero />
// <Perks />
// {/* <Services /> */}
// <Trails />
// <Mountains />
// <AppPromotion />
// <Testimonials />
