import Layout from './componnets/Layout';
import About from './sections/About';
import Articles from './sections/Articles';
import Hero from './sections/Hero';
import Perks from './sections/Perks';
import Testimonials from './sections/Testimonials';
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
      {/* <Perks /> */}
      {/* <Articles /> */}
    </Layout>
  );
}

export default App;
