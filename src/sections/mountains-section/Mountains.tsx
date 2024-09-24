import { MountainCard } from './MountainCard';
import MountainList from './mountain-list';

const Mountains = () => {
  return (
    <div className='my-20 flex flex-col gap-y-10 px-4 lg:px-20'>
      <h2 className='text-7xl font-semibold'>Mountains</h2>
      <div className='grid gap-y-8 lg:grid-cols-2 lg:gap-12'>
        {MountainList.map((mountain, index) => (
          <MountainCard key={index} {...mountain} />
        ))}
      </div>
    </div>
  );
};

export default Mountains;
