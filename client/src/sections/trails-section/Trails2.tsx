import Carousel from '../../components/carousel/Carousel';

export default function Trails2() {
  return (
    <div className="flex h-screen flex-col justify-center gap-y-4 sm:p-4 lg:px-14">
      <div className="flex flex-col gap-y-2 pt-10">
        <h2 className="text-2xl font-bold lg:text-4xl">Hot Trails</h2>
        <h3 className="text-sm text-gray-600">Trails that is popular this time of the year!</h3>
      </div>
      <Carousel hasFilter={false} />
    </div>
  );
}
