import heroGuy from '../assets/heroguy.jpg';

export default function Hero() {
  return (
    <div
      id='hero'
      style={{
        backgroundImage: `url(${heroGuy})`,
      }}
      className='grid  h-[100dvh] w-full place-items-center justify-items-start bg-cover bg-no-repeat text-black   lg:px-10'>
      <div>
        <h1 className='text-4xl font-bold   sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>
          Explore <br className='hidden md:block' /> the mountains
          <br className='hidden md:block' /> of the Philippines
        </h1>
        <div className='mt-14 flex flex-col'>
          <p className='  text-sm font-semibold  lg:text-base'>
            Our clients experience fun and safe journey when climbing.
            <br className='hidden md:block' /> What are you waiting for? The peaks are ready.
          </p>
          <button className='mt-8 h-14 w-40  border-2  border-black text-base font-semibold text-black   '>Explore</button>
        </div>
      </div>
    </div>
  );
}
