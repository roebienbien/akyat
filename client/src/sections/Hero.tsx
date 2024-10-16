import heroGuy from '../assets/heroguy.jpg';
import Button from '../components/ui/Button';

export default function Hero() {
  return (
    <div
      id='hero'
      style={{
        backgroundImage: `url(${heroGuy})`,
      }}
      className='grid h-[100dvh] w-full place-items-center justify-items-center bg-cover bg-no-repeat px-6 text-black md:justify-items-start   lg:px-10'>
      <div className='grid gap-y-4 text-center md:text-start lg:gap-y-10'>
        <h1 className='text-2xl font-bold  xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>
          Explore <br className='hidden md:block' /> the mountains
          <br className='hidden md:block' /> of the Philippines
        </h1>
        <div className='flex w-full flex-col items-start'>
          <p className='text-xs  xs:text-sm lg:text-xl'>
            Our clients experience fun and safe journey when climbing.
            <br className='hidden md:block' /> What are you waiting for? The peaks are ready.
          </p>
          {/* <Button text='Explore' className='mx-auto mt-8 h-14 w-40 border-2 border-black  text-base  font-semibold text-black md:mx-0   ' /> */}
          {/* <Button text='Explore' className='mx-auto mt-8 h-14 w-40 border-2 border-green-600 text-base  font-semibold  text-black text-green-600 md:mx-0   ' /> */}
          <button className={`mx-auto mt-4 w-fit  bg-green-600 px-6 py-2 text-sm text-white hover:bg-green-700 md:mx-0 lg:px-16 lg:py-4 lg:text-lg`}>Explore</button>
        </div>
      </div>
    </div>
  );
}
