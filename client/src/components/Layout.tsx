import React from 'react';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import { Outlet } from 'react-router-dom';
import AppPromotion from '../sections/app-promotion/AppPromotion';
import Hero from '../sections/Hero';
import Mountains from '../sections/mountains-section/Mountains';
import Perks from '../sections/perks-section/Perks';
import Testimonials from '../sections/testimonials/Testimonials';
import Trails from '../sections/trails-section/Trails';
import TrailsProvider from '../sections/trails-section/TrailsContext';

function Layout() {
  return (
    <div className='min-w-[320px] scroll-smooth bg-zinc-100 font-sans'>
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
