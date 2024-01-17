export default function Hero() {
  // const title = 'Your start, Your pace, Your, Summit'; //slogan
  // const title = 'The Mountains are waiting to be conquered';
  // const title = 'The Mountains are waiting';
  // const subtitle =
  //   'Our clients experience safe and fun journey when climbing. What are you waiting for? The peaks are ready.';
  const title = 'Explore the mountains of the Philippines';
  return (
    <div
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&q=80&w=1476&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
      className=' grid h-screen w-full place-items-center justify-items-center  bg-cover bg-no-repeat text-white opacity-100'>
      <div className=''>
        <h1 className='px-10 text-center font-poppins text-4xl font-semibold sm:px-20 sm:text-5xl md:text-6xl lg:text-7xl'>
          {title}
        </h1>
        <div className='mx-auto mt-14 grid justify-items-center px-6 sm:px-20 '>
          <p className='text-center text-sm font-semibold  lg:text-base'>
            Our clients experience safe and fun journey when climbing.
            <br className='hidden md:block' /> What are you waiting for? The peaks are ready.
          </p>
          <button className='mt-8  border-2 px-6 py-2 text-base font-semibold lg:px-12 lg:py-4'>Explore</button>
        </div>
      </div>
    </div>
  );
}
