import React from 'react';
import Navbar from './navbar';
import Footer from '../sections/footer/Footer';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-w-[320px] bg-zinc-100  font-poppins '>
      <Navbar />
      {/* <div className='px-10 md:px-20 lg:px-40 mt-24'>{children}</div> */}
      <div className=''>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
