import Layout from './componnets/Layout';
import About from './sections/About';
import Articles from './sections/Articles';
import Hero from './sections/Hero';
import Perks from './sections/Perks';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      {/* <Perks /> */}
      {/* <Articles /> */}
    </Layout>
  );
}

export default App;
