import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import AppPromotion from './sections/app-promotion/AppPromotion';
import Hero from './sections/Hero';
import Mountains from './sections/mountains-section/Mountains';
import Perks from './sections/perks-section/Perks';
import Services from './sections/services-section/Services';
import Testimonials from './sections/testimonials/Testimonials';
import NotFoundPage from './pages/NotFoundPage';
import LoginForm from './components/ui/forms/LoginForm';
import Form from './components/ui/forms/Form';
import RegisterForm from './components/ui/forms/RegisterForm';
import Trails from './sections/trails-section/Trails';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFoundPage />,
    element: (
      <Layout>
        <Hero />
        <Perks />
        {/* <Services /> */}
        <Trails />
        <Mountains />
        <AppPromotion />
        <Testimonials />
      </Layout>
    ),
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
