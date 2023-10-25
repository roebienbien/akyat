import React from 'react';
import Navbar from './navbar';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-zinc-50 font-sans text-white'>
      <Navbar />
      {/* <div className='px-10 md:px-20 lg:px-40 mt-24'>{children}</div> */}
      <div className=''>{children}</div>
    </div>
  );
}

export default Layout;
