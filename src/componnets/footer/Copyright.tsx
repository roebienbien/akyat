import roebienLogo from '../../assets/roebien-logo.svg';

export default function Copyright() {
  const currentYear = new Date().getFullYear();
  return (
    <div className=' flex w-full justify-between  border-t-2 border-gray-400 bg-zinc-100 px-4  py-4  lg:px-40'>
      <p className='text-xs  md:text-base'>
        {`Copyright © ${currentYear}`} <span className='hidden md:inline'> Akyat(PHL) | All Right Reserved </span>
      </p>
      <div className='flex items-center space-x-2'>
        <span className='text-xs'>Developed by </span>
        <img src={roebienLogo} alt='roebien-logo' width={30} height={30} />
      </div>
    </div>
  );
}
