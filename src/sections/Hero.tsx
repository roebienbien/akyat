export default function Hero() {
  return (
    // <div className='  h-screen'>
    <div
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&q=80&w=1476&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
      className='grid h-screen w-full place-items-center justify-items-center bg-no-repeat object-cover opacity-100'>
      <div>
        <h1 className='whitespace-pre text-center text-7xl font-semibold'>
          Lorem, ipsum dolor <br className='hidden md:block' /> Lorem, ipsum
        </h1>
        <div className='mt-14 grid justify-items-center '>
          <p className='text-center text-2xl'>
            Linear is the better way Lorem, ipsum dolor. Lorem, ipsum. <br className='hidden md:block' /> to build products
            Lorem ipsum dolor sit amet.
          </p>
          <button className='mt-8  border-2 px-12 py-4 text-lg font-semibold'>Explore</button>
        </div>
      </div>
    </div>
  );
}
