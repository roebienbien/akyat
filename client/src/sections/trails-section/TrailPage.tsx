import { ChangeEvent, FormEvent, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  FaGaugeHigh,
  FaLocationDot,
  FaMinus,
  FaMountain,
  FaPlus,
  FaRegClock,
  FaRoute,
  FaRulerHorizontal,
  FaRulerVertical,
} from "react-icons/fa6";
import { useParams } from "react-router-dom";
import kelly from "../../assets/kelly-smith.jpg";
import StarRating from "../../components/StarRating";
import PrimaryButton from "../../components/ui/buttons/PrimaryButton";
import { useTrailsContext } from "./TrailsContext";
import UnsplashImage from "../../components/ui/UnsplashImage";

const convertToHoursAndMinutes = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return `${hours} hr${hours !== 1 ? "s" : ""} ${remainingMinutes} min${remainingMinutes !== 1 ? "s" : ""}`;
};

export default function TrailPage() {
  const [count, setCount] = useState<number>(1);
  const [startDate, setStartDate] = useState<Date>(new Date());

  const minGuest = 1;
  const maxGuest = 100;

  const incrementCount = () => {
    setCount((prev) => (prev < maxGuest ? prev + 1 : maxGuest));
  };
  const decrementCount = () => {
    setCount((prev) => (prev > minGuest ? prev - 1 : minGuest));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10); //base 10
    if (!isNaN(value)) setCount(value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const { trailId } = useParams<{ trailId: string }>();
  const trails = useTrailsContext();
  const trail = trails.find((t) => t.route === trailId);

  if (!trail) return <div className="text-red-500">Error: Trail Not Found</div>;

  const {
    name,
    price,
    photoId,
    imgAlt,
    photos,
    location,
    elevation,
    duration,
    length,
    trailType,
    difficulty,
    rating,
    relevancy,
  } = trail;
  const formattedDuration = convertToHoursAndMinutes(duration);

  const TrailInfo = [
    { icon: <FaLocationDot />, label: "Location", value: location },
    { icon: <FaMountain />, label: "Elevation", value: `${elevation} m` },
    { icon: <FaRegClock />, label: "Duration", value: formattedDuration },
    {
      icon: <FaRulerVertical />,
      label: "Elevation Gain",
      value: `${elevation} m`,
    },
    { icon: <FaRulerHorizontal />, label: "Length", value: `${length} km` },
    { icon: <FaGaugeHigh />, label: "Difficulty", value: difficulty },
    { icon: <FaRoute />, label: "Trail Type", value: trailType },
  ];

  return (
    <div className="mt-16 min-h-screen bg-gray-50 px-2 lg:p-10">
      <div className="mx-auto grid gap-y-4 lg:max-w-6xl">
        {/* Image Preview */}
        <div className="grid h-[400px] grid-cols-2 gap-2 overflow-clip rounded-lg">
          <UnsplashImage photoId={photoId} alt={imgAlt} />
          <div className="grid h-full grid-cols-2 gap-2">
            {/* {Array(4)
              .fill(0)
              .map((_, index) => (
                <UnsplashImage key={index} photoId={photoId} alt={imgAlt} />
              ))} */}
            {photos.map((photo, index) => (
              <UnsplashImage
                photoId={photo.photoId}
                alt={"galleries"}
                key={index}
              />
            ))}
          </div>
        </div>

        {/* Trail Contents */}
        <div className="grid lg:grid-cols-3">
          <div className="col-span-2 flex h-screen max-h-screen w-[95%] flex-col gap-y-2 md:gap-y-10">
            <div className="flex items-center gap-x-4">
              <h2 className="text-2xl font-semibold lg:text-4xl">{name}</h2>
              <span className="flex h-full items-end gap-x-1 underline lg:text-lg">
                {/* <Link to='trails/pulag/#reviews'>{rating}</Link> */}
                <a href="#reviews">{rating}</a>
                <StarRating value={rating} />
                <a href="#reviews" className="border-l-2 border-gray-300 pl-2">
                  5.5k ratings
                </a>
              </span>
            </div>
            {/* Trail Coordinator */}
            <div className="flex items-center gap-x-6 border-b border-t border-gray-400">
              <div>
                <img
                  src={kelly}
                  alt="coordinator-avatar"
                  className="h-12 w-12 rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col py-4">
                <span className="text-xl font-medium">Kelly Smith</span>
                <span className="text-sm text-gray-500">
                  Hiking Coordinator
                </span>
              </div>
            </div>

            {/* <div className='flex flex-col gap-y-4'>
              {TrailInfo.map((trail, index) => (
                <div key={index} className='flex items-center gap-x-6 text-2xl'>
                  {trail.icon}
                  <span className='text-xl font-medium'>{trail.label}:</span>
                  <span className='col-start-2 text-base text-gray-600'>{trail.value}</span>
                </div>
              ))}
            </div> */}

            {/* Trail Info */}
            <div className="grid grid-cols-2 gap-6">
              {TrailInfo.map((trail, index) => (
                <div
                  key={index}
                  className="flex items-center gap-x-6 text-2xl text-gray-700"
                >
                  {trail.icon}
                  <div className="flex flex-col">
                    <span className="text-base font-medium">{trail.value}</span>
                    <span className="col-start-2 text-xs text-gray-500">
                      {trail.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Trail Overview */}
            <div className="flex flex-col gap-y-4 text-justify lg:max-w-[740px]">
              <span className="text-3xl font-semibold">Overview</span>
              <span className="flex flex-col gap-y-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  quis ex quisquam vel eius maxime error neque excepturi atque
                  facere. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Repellat est debitis labore deleniti unde voluptatibus
                  aliquid iste illum nemo praesentium?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  quis ex quisquam vel eius maxime error neque excepturi atque
                  facere. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Repellat est debitis labore deleniti unde voluptatibus
                  aliquid iste illum nemo praesentium?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  quis ex quisquam vel eius maxime error neque excepturi atque
                  facere. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Repellat est debitis labore deleniti unde voluptatibus
                  aliquid iste illum nemo praesentium?
                </p>
              </span>
            </div>
          </div>
          {/* Floating Form */}
          <div className="sticky top-0 z-10 h-fit max-w-3xl rounded-lg border border-gray-300 px-4 py-6 shadow-2xl">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-items-center gap-y-4 px-2"
            >
              <div className="flex flex-col">
                <span className="text-lg">
                  ₱{price.toLocaleString()} / guest
                </span>
                <div className="flex items-center gap-x-2">
                  <span>Hike Date</span>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => date && setStartDate(date)}
                    showIcon
                    className="cursor-pointer text-center"
                  />
                </div>
              </div>
              <div className="flex">
                <button
                  onClick={decrementCount}
                  disabled={count === minGuest}
                  className="border bg-white p-2 text-2xl text-black"
                >
                  <FaMinus className="text-base" />
                </button>
                <span
                  onChange={handleInputChange}
                  className="flex w-full items-center justify-center border"
                >
                  {count} {count > 1 ? "guests" : "guest"}
                </span>
                {/* <PrimaryButton text='+' onClick={incrementCount} disabled={count === 100} className='border bg-white py-0 text-2xl text-black' /> */}
                <button
                  onClick={incrementCount}
                  disabled={count === maxGuest}
                  className="border bg-white p-2 text-2xl text-black"
                >
                  <FaPlus className="text-base" />
                </button>
              </div>
              <PrimaryButton
                text="Reserve"
                className="mt-4 w-full bg-green-600 p-2 hover:bg-green-700 lg:text-lg"
              />
              <div className="flex flex-col gap-y-6">
                <span className="border-b border-gray-500 py-2 text-lg">{`₱${price.toLocaleString()} x ${count} ${count > 1 ? "guests" : "guest"} `}</span>
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total Price</span>
                  <span> ₱{(price * count).toLocaleString()}</span>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div id="reviews" className="h-screen bg-red-100 text-4xl">
          Reviews
        </div>
        <div>
          <span className="lg:text-4xl">Related Trails</span>
        </div>
      </div>
    </div>
  );
}
