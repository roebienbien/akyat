import Layout from './componnets/Layout';
import About from './sections/about/About';
import Articles from './sections/Articles';
import Hero from './sections/Hero';
import Testimonials from './sections/testimonial-section/Testimonials';
import AppPromotion from './sections/app-promotion/AppPromotion';
import Mountains from './sections/mountains/Mountains';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Mountains />
      <AppPromotion />
      <Testimonials />
    </Layout>
  );
}

export default App;
