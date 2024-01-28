import React from 'react';
import Navbar from './navbar';
import Footer from '../sections/footer/Footer';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-w-[320px] bg-zinc-100  font-poppins '>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
