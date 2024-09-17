import heroGuy from '../assets/heroguy.jpg';
import Button from '../componnets/ui/Button';

export default function Hero() {
  return (
    <div
      id='hero'
      style={{
        backgroundImage: `url(${heroGuy})`,
      }}
      className='grid h-[100dvh] w-full place-items-center  justify-items-center  bg-cover bg-no-repeat text-black md:justify-items-start   lg:px-10'>
      <div className='text-center md:text-start'>
        <h1 className='text-2xl font-bold  xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>
          Explore <br className='hidden md:block' /> the mountains
          <br className='hidden md:block' /> of the Philippines
        </h1>
        <div className=' mt-8 flex w-full flex-col xs:mt-14'>
          <p className='text-xs  font-semibold xs:text-sm lg:text-base'>
            Our clients experience fun and safe journey when climbing.
            <br className='hidden md:block' /> What are you waiting for? The peaks are ready.
          </p>
          <Button
            text='Explore'
            className='mx-auto mt-8 h-14 w-40 border-2 border-black  text-base  font-semibold text-black md:mx-0   '
          />
        </div>
      </div>
    </div>
  );
}
