import { Link } from 'react-router-dom';
import heroGuy from '../assets/heroguy.jpg';
import heroGuy50 from '../assets/heroguy50.jpg';
import heroGuy20 from '../assets/heroguy20.jpg';
import heroGuy1 from '../assets/heroguy1.jpg';
import { useState } from 'react';

export default function Hero() {
  return (
    <div
      id="home"
      style={{
        // backgroundImage: `url(${heroGuy50}), url(${heroGuy})`,
        backgroundImage: `url(${heroGuy}), url(${heroGuy50}), url(${heroGuy20}), url(${heroGuy1})`,
        // backgroundImage: `url(${heroGuy})`,
      }}
      className="mx-auto h-[100dvh] bg-cover bg-no-repeat px-6"
    >
      <div className="flex h-full flex-col justify-center justify-items-start gap-y-4 text-center md:text-start lg:gap-y-8 lg:px-10">
        <h1 className="w-full text-2xl font-bold xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          Explore <br className="hidden md:block" /> the mountains
          <br className="hidden md:block" /> of the Philippines
        </h1>
        <div className="flex w-full flex-col items-start">
          <p className="text-xs xs:text-sm lg:text-xl">
            Experience a fun and safe journey when climbing.
            <br className="hidden md:block" /> What are you waiting for? The peaks are ready.
          </p>
          <Link
            to="/trails"
            className={`mx-auto mt-4 w-fit bg-green-600 px-6 py-2 text-sm text-white hover:bg-green-700 md:mx-0 lg:px-16 lg:py-4 lg:text-lg`}
          >
            Book a Hike
          </Link>
        </div>
      </div>
    </div>
  );
}
