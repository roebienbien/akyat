import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { IFooterLinks } from '../footer/footer-links';

export default function Accordion({ title, links }: IFooterLinks) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className=''>
      <button onClick={() => setAccordionOpen(!accordionOpen)} className='flex w-full items-center justify-between text-sm '>
        <span className='text-2xl'>{title}</span>
        {accordionOpen ? <FaMinus /> : <FaPlus />}
      </button>
      <div
        className={`${
          accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        } grid overflow-hidden transition-all duration-300 ease-in-out`}>
        <div className='flex flex-col overflow-hidden'>
          {links.map((link, index) => (
            <a href={link.src} key={index}>
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
