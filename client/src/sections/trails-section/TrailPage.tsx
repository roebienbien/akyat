import { useParams } from 'react-router-dom';
import { useTrailsContext } from './TrailsContext';
import { ChangeEvent, FormEvent, useState } from 'react';
import PrimaryButton from '../../components/ui/buttons/PrimaryButton';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function TrailPage() {
  const [count, setCount] = useState<number>(1);
  const [startDate, setStartDate] = useState<Date>(new Date());

  const { trailId } = useParams<{ trailId: string }>();
  const trails = useTrailsContext();
  const trail = trails.find((t) => t.route === trailId);

  if (!trail) return <div className='text-red-500'>Error: Trail Not Found</div>;

  const { name, price, previewSrc, elevation } = trail;

  const incrementCount = () => {
    setCount((prev) => (prev < 100 ? prev + 1 : 100));
  };
  const decrementCount = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) setCount(value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className='min-h-screen bg-gray-50 p-10'>
      <div className='mx-auto grid gap-y-4 lg:max-w-6xl'>
        <div className='grid grid-cols-2  gap-2'>
          <img src={previewSrc} alt='trail-preview' className=' h-full rounded-lg bg-no-repeat object-cover' />
          <div className='grid h-full grid-cols-2 gap-2'>
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <img key={index} src={previewSrc} alt='trail-preview' className='h-full rounded-lg  object-cover' />
              ))}
          </div>
        </div>
        <h2 className='font-semibold lg:text-4xl'>{name}</h2>
        <div className='grid grid-cols-3 gap-4'>
          <div className='bg-max-h-screen col-span-2 h-screen bg-green-100'></div>
          <div className='sticky top-0 z-50 h-60 max-w-3xl rounded-lg border border-gray-300 p-4 shadow-xl'>
            <form onSubmit={handleSubmit} className='flex flex-col justify-items-center gap-y-2  px-2 '>
              <div className='flex flex-col'>
                {/* <span>Add dates for price</span> */}
                <span className='text-lg'>₱{price.toLocaleString()}</span>
                {/* <span>Date Picker</span> */}
                <DatePicker selected={startDate} onChange={(date) => date && setStartDate(date)} showIcon className='w-full text-center' />
              </div>
              <div className='flex'>
                <PrimaryButton text='-' onClick={decrementCount} disabled={count === 1} className='border bg-white py-0 text-2xl text-black' />
                <span onChange={handleInputChange} className='flex w-full items-center justify-center border '>
                  {count} {count > 1 ? 'guests' : 'guest'}
                </span>
                <PrimaryButton text='+' onClick={incrementCount} disabled={count === 100} className='border bg-white py-0 text-2xl text-black' />
              </div>
              <PrimaryButton text='Reserve' className='w-full bg-green-600 p-2 lg:text-xl' />
              <span>{`₱${price} x ${count} ${count > 1 ? 'guests' : 'guest'} `}</span>
              <span className='text-lg'>₱{(price * count).toLocaleString()}</span>
            </form>
          </div>
        </div>
      </div>
      {/* <Carousel /> */}
    </div>
  );
}
