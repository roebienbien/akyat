import Layout from './componnets/Layout';
import Perks from './sections/perks-section/Perks';
import Articles from './sections/Articles';
import Hero from './sections/Hero';
import Testimonials from './sections/testimonials/Testimonials';
import AppPromotion from './sections/app-promotion/AppPromotion';
import { BrowserRouter, Routes } from 'react-router-dom';
import Services from './sections/services-section/Services';
import Form from './componnets/ui/Form';
import Mountains from './sections/mountains-section/Mountains';

function App() {
  return (
    <Layout>
      {/* <Routes> */}
      <Hero />
      <Perks />
      <Form />
      <Services />
      <Mountains />
      <AppPromotion />
      <Testimonials />
    </Layout>
  );
}

export default App;
