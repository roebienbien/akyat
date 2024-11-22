import Accordion from '../ui/Accordion';
import Copyright from './Copyright';
import { FooterLinksList } from './footer-links';
import FooterLinks from './FooterLinks';

export default function Footer() {
  return (
    <footer className="relative h-[600px] bg-zinc-800 text-white">
      <div className="flex flex-col px-2 py-8 xs:px-4 sm:px-10 md:px-20 lg:flex-row lg:justify-between lg:space-x-20">
        <div className="max-w-lg text-left lg:max-w-2xl">
          <h3 className="text-2xl font-bold md:text-5xl">Akyat</h3>
          <span className="flex flex-col gap-y-4">
            <p className="mt-2 text-justify text-sm lg:text-base">
              Whether you are from overseas or local, we can help you explore the 3142 summits of the Philippines. Akyat is your bridge that connects
              Lorem ipsum dolor sit amet.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, fuga. Perferendis nostrum quia aliquam reiciendis mollitia quisquam,
              voluptate architecto saepe! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, vel.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, fuga. Perferendis nostrum quia aliquam reiciendis mollitia quisquam,
              voluptate architecto saepe!
            </p>
          </span>
        </div>
        {/* Mobile FooterLinks */}
        <div className="mt-10 md:hidden">
          {/* <Accordion FooterLinks /> */}
          {FooterLinksList.map((item, index) => (
            <Accordion key={index} {...item} />
          ))}
        </div>

        {/* Large Devices FooterLinks */}
        <div className="mt-8 hidden space-x-14 lg:flex">
          {FooterLinksList.map((items, key) => (
            <FooterLinks key={key} {...items} />
          ))}
        </div>
      </div>
      <Copyright />
    </footer>
  );
}
