import { Outlet, useLocation } from 'react-router-dom';
import TrailsProvider from '../sections/trails-section/TrailsContext';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';
import ScrollToTop from './ScrollToTop';
// import ScrollToHashElement from '@cascadia-code/scroll-to-hash-element';
import ScrollToHashElement from '@cascadia-code/scroll-to-hash-element';
import { useEffect } from 'react';

function Layout() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const targetElement = document.getElementById(hash.replace('#', ''));
      // if (targetElement) {
      // targetElement.scrollIntoView({ behavior: smooth });
      // }
    }
  }, [hash]);
  return (
    <div className='min-w-[320px]  scroll-smooth bg-zinc-50 font-sans'>
      <ScrollToHashElement />
      <ScrollToTop />
      <Navbar />
      <TrailsProvider>
        <Outlet />
      </TrailsProvider>
      <Footer />
    </div>
  );
}

export default Layout;

// <Hero />
// <Perks />
// <Trails />
// <Mountains />
// <AppPromotion />
// <Testimonials />
