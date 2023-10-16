import { Navlinks } from './navlinks';

function Navbar() {
  return (
    <div className='bg-slate-400 flex py-6 px-40 justify-between'>
      <div>
        <span className='font-bold text-2xl cursor-pointer'>Langoy</span>
      </div>
      <ul className='flex space-x-10'>
        {Navlinks.map((item, key) => (
          <li key={key} className='font-semibold cursor-pointer text-xl capitalize'>
            {item.title}
          </li>
        ))}
      </ul>
      <button className='text-xl'>Get Started</button>
    </div>
  );
}

export default Navbar;
