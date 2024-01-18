import React from 'react';
import roebienLogo from '../assets/roebien-logo.svg';
import { QuickLinks, Legals, Socials } from '../componnets/footer-links';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='relative mt-20  bg-zinc-50  '>
      <div className=' relative bg-black  '>
        <img
          // src='https://images.pexels.com/photos/3063478/pexels-photo-3063478.jpeg'
          src='https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='5-people-smiling'
          className=' h-[400px] w-full  object-cover object-bottom opacity-40 '
        />
        <span className='absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-4 text-center font-semibold  text-white  md:px-10 md:text-4xl lg:text-5xl   xl:px-20   '>
          We would be delighted to assist you in having the trip of a lifetime.
        </span>
      </div>
      <div className='flex h-96 justify-between px-36 py-8'>
        <div className='text-left lg:max-w-lg'>
          <h3 className='  text-5xl font-bold'>Akyat</h3>
          <p className='mt-2 text-justify text-lg leading-loose '>
            Whether you are from overseas or local, we can help you explore the 3142 summits of the Philippines.{' '}
            <br className='hidden md:block' />
            Akyat is your bridge that connects Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className='flex space-x-14  '>
          <div>
            <span className=' text-2xl font-bold'>Quick Links</span>
            <ul className='mt-4 space-y-4'>
              {QuickLinks.map((quickLinks, key) => (
                <li key={key} className='cursor-pointer text-sm font-semibold '>
                  {quickLinks.title}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className='text-2xl font-bold'>Legals</span>
            <ul className='mt-4 space-y-4'>
              {Legals.map((legals, key) => (
                <li key={key} className='cursor-pointer text-sm font-semibold '>
                  {legals.title}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className='text-2xl font-bold'>Socials</span>
            <ul className='mt-4 space-y-4'>
              {Socials.map((social, key) => (
                <li key={key} className='flex cursor-pointer items-center space-x-1 text-sm font-semibold '>
                  <social.icon className='text-base' />
                  <span>{social.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className=' flex w-full  justify-between border-t-2 border-gray-400 bg-zinc-100  px-10 py-4 lg:px-40'>
        <p> {`Copyright © ${currentYear} Akyat(PHL) | All Right Reserved`}</p>
        <div className='flex items-center space-x-2'>
          <span>Developed by </span>
          <img src={roebienLogo} alt='roebien-logo' width={40} height={50} />
        </div>
      </div>
    </footer>
  );
}
