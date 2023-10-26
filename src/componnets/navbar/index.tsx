import { Navlinks } from './navlinks';

function Navbar() {
  return (
    // <div className='fixed top-0 z-50  flex w-full items-center justify-between px-40 py-6  '>
    <div className='fixed top-0 z-50 flex w-full  items-center justify-between px-40 py-4    '>
      <div>
        <span className='cursor-pointer text-2xl font-semibold'>Akyat</span>
      </div>
      <ul className='flex space-x-10'>
        {Navlinks.map((item, key) => (
          <li key={key} className='cursor-pointer text-xl  capitalize'>
            {item.title}
          </li>
        ))}
      </ul>
      <button className='border px-8 py-2 text-lg'>Login</button>
    </div>
  );
}

export default Navbar;
// #446E7A
