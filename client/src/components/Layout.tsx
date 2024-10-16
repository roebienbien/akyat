import React from 'react';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-w-[320px] bg-zinc-100 font-sans'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
