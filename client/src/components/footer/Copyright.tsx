import roebienLogo from '../../assets/roebien-logo.svg';

export default function Copyright() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="absolute bottom-0 flex h-14 w-full items-center justify-between border-t border-gray-400 bg-zinc-900 px-4 lg:px-20">
      <p className="text-xs md:text-base">
        {`Copyright © ${currentYear}`} <span className="hidden md:inline"> Akyat(PHL) | All Right Reserved </span>
      </p>
      <div className="flex items-center space-x-2">
        <span className="text-xs">Developed by </span>
        <img src={roebienLogo} alt="roebien-logo" width={30} height={30} />
      </div>
    </div>
  );
}
