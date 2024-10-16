import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Form from './components/ui/Form';
import AppPromotion from './sections/app-promotion/AppPromotion';
import Hero from './sections/Hero';
import Mountains from './sections/mountains-section/Mountains';
import Perks from './sections/perks-section/Perks';
import Services from './sections/services-section/Services';
import Testimonials from './sections/testimonials/Testimonials';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFoundPage />,
    element: (
      <Layout>
        <Hero />
        <Perks />
        <Form />
        <Services />
        <Mountains />
        <AppPromotion />
        <Testimonials />
      </Layout>
    ),
  },

  {
    path: '/login',
    element: <Form />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
