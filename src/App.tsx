import Layout from './componnets/Layout';
import About from './sections/About';
import Articles from './sections/Articles';
import Hero from './sections/Hero';
import Perks from './sections/Perks';
import Testimonials from './sections/Testimonials';
import AppPromotion from './sections/app-promotion/AppPromotion';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <AppPromotion />
      <Testimonials />
      {/* <Perks /> */}
      {/* <Articles /> */}
    </Layout>
  );
}

export default App;
