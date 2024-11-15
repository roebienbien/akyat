import Carousel from "../../components/carousel/Carousel";

export default function Trails() {
  return (
    <div className="flex h-screen flex-col  gap-y-4  p-2 sm:p-4 lg:px-14 ">
      <div className="flex flex-col gap-y-2 pt-10">
        <h2 className="text-2xl font-bold lg:text-4xl">
          All the trails in one place
        </h2>
        <h3 className="text-sm text-gray-600">
          From beginner trails to advanced climbs, Akyat supports your spiritual
          journey.
        </h3>
      </div>
      <Carousel />
    </div>
  );
}
