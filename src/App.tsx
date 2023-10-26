import Layout from './componnets/Layout';
import About from './sections/About';
import Hero from './sections/Hero';
import Perks from './sections/Perks';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Perks />
    </Layout>
  );
}

export default App;
