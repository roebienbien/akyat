import Layout from './componnets/Layout';
import About from './sections/about/About';
import Articles from './sections/Articles';
import Hero from './sections/Hero';
import Testimonials from './sections/testimonials/Testimonials';
import AppPromotion from './sections/app-promotion/AppPromotion';
import Mountains from './sections/mountains/Mountains';
import { BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <Layout>
      {/* <Routes> */}
      <Hero />
      {/* <Hero1 /> */}
      <About />
      {/* <Mountains /> */}
      <AppPromotion />
      <Testimonials />
    </Layout>
  );
}

export default App;
