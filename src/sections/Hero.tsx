export default function Hero() {
  // const title = 'Your start, Your pace, Your, Summit'; //slogan
  // const title = 'The Mountains are waiting to be conquered';
  const title = 'The Mountains are waiting';
  const subtitle = '';
  return (
    // <div className='  h-screen'>
    <div
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&q=80&w=1476&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
      className=' grid h-screen w-full place-items-center justify-items-center bg-cover bg-no-repeat text-white opacity-100'>
      <div className=''>
        <h1 className='px-10 text-center font-poppins text-4xl font-semibold sm:px-20 sm:text-5xl md:text-6xl lg:text-7xl'>
          {title}
        </h1>
        <div className='mx-auto mt-14 grid justify-items-center px-6 sm:px-32 '>
          {/* <p className='text-center text-xs sm:text-base lg:text-2xl'>
            Linear is the better way Lorem, ipsum dolor. Lorem, ipsum. <br className='hidden md:block' /> to build products
            Lorem ipsum dolor sit amet.
          </p> */}
          <p className='text-center text-xl font-bold sm:text-2xl lg:text-2xl'>{subtitle}</p>
          <button className='mt-8  border-2 px-6 py-2 text-base lg:px-12 lg:py-4'>Explore</button>
        </div>
      </div>
    </div>
  );
}

// <div className=''>
//   <h1 className='px-10 text-center font-poppins text-3xl font-semibold sm:px-20 sm:text-5xl md:text-6xl lg:text-8xl'>
//     Lorem, ipsum dolor <br className='hidden md:block' /> Lorem, ipsum
//   </h1>
//   <div className='mx-auto mt-14 grid justify-items-center px-6 sm:px-32 '>
//     {/* <p className='text-center text-xs sm:text-base lg:text-2xl'>
//       Linear is the better way Lorem, ipsum dolor. Lorem, ipsum. <br className='hidden md:block' /> to build products
//       Lorem ipsum dolor sit amet.
//     </p> */}
//     <p className='text-center text-xl font-bold sm:text-2xl lg:text-2xl'>{slogan}</p>
//     <button className='mt-8  border px-6 py-2 lg:px-12 lg:py-4'>Explore</button>
//   </div>
// </div>
