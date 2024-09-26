import { MountainCard } from './MountainCard';
import MountainList from './mountain-list';

const Mountains = () => {
  return (
    <div id='trails' className='flex flex-col gap-y-10 px-4  py-20  lg:px-20'>
      <h2 className='pt-20 text-7xl font-semibold'>Mountains</h2>
      <div className='grid gap-y-8 lg:grid-cols-2 lg:gap-12'>
        {MountainList.map((mountain, index) => (
          <MountainCard key={index} {...mountain} />
        ))}
      </div>
    </div>
  );
};

export default Mountains;
