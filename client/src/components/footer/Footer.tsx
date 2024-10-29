import Accordion from '../ui/Accordion';
import Copyright from './Copyright';
import { FooterLinksList } from './footer-links';
import FooterLinks from './FooterLinks';

export default function Footer() {
  const footerImg =
    'https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <footer className='lg:min-h-screen'>
      <div className='relative bg-black  '>
        <img src={footerImg} alt='six-people-mountain' className=' h-[200px] w-full object-cover object-bottom opacity-40 md:h-[400px] ' />
        <h3 className='absolute left-1/2 top-1/2 w-full -translate-x-1/2  -translate-y-1/2 text-center  font-semibold text-white sm:text-2xl  md:px-10 md:text-4xl lg:text-5xl   xl:px-20   '>
          We would be delighted to assist you in having the trip of a lifetime.
        </h3>
      </div>
      <div className='  flex flex-col px-2  py-8 xs:px-4 sm:px-10 md:my-8 md:px-20 lg:flex-row lg:justify-between lg:space-x-20'>
        <div className='text-left lg:max-w-lg'>
          <h3 className='text-2xl  font-bold md:text-5xl'>Akyat</h3>
          <p className='mt-2 text-justify text-sm lg:text-base '>
            Whether you are from overseas or local, we can help you explore the 3142 summits of the Philippines. Akyat is your bridge that connects Lorem ipsum dolor sit amet.
          </p>
        </div>
        {/* Mobile FooterLinks */}
        <div className='mt-10 md:hidden'>
          {/* <Accordion FooterLinks /> */}
          {FooterLinksList.map((item, index) => (
            <Accordion key={index} {...item} />
          ))}
        </div>

        {/* Large Devices FooterLinks */}
        <div className='mt-8 hidden space-x-14 lg:flex  '>
          {FooterLinksList.map((items, key) => (
            <FooterLinks key={key} {...items} />
          ))}
        </div>
      </div>
      <Copyright />
    </footer>
  );
}
