import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import LoginForm from './components/ui/forms/LoginForm';
import RegisterForm from './components/ui/forms/RegisterForm';
import NotFoundPage from './pages/NotFoundPage';
import AppPromotion from './sections/app-promotion/AppPromotion';
import Hero from './sections/Hero';
import Mountains from './sections/mountains-section/Mountains';
import Perks from './sections/perks-section/Perks';
import Testimonials from './sections/testimonials/Testimonials';
import TrailPage from './sections/trails-section/TrailPage';
import Trails from './sections/trails-section/Trails';
import StarRating from './components/StarRating';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFoundPage />,
    element: <Layout />,
    children: [
      {
        path: '/',
        element: (
          <>
            <Hero />
            <Perks />
            {/* <Services /> */}
            <Trails />
            <Mountains />
            <AppPromotion />
            <Testimonials />
          </>
        ),
      },
      {
        path: '/trails',
        element: <Trails />,
        // children: [],
      },
      {
        path: 'trails/:trailId',
        element: <TrailPage />,
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
