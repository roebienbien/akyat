import UnsplashImage from "../../components/ui/UnsplashImage";
import { PerksList } from "./perks-list";
import PerksCard from "./PerksCard";

export default function Perks() {
  return (
    <div
      id="about"
      className="my-20 flex flex-col items-center justify-center px-4 md:flex-row lg:min-h-[100dvh] lg:px-20"
    >
      <div className="items flex flex-col items-center justify-center gap-6 md:flex-row-reverse">
        <UnsplashImage
          photoId={"1584223719571-778f3f37aa56"}
          alt={"woman-smiling-mountain"}
          className="rounded-xl shadow-lg"
        />

        <div className="flex h-full w-full flex-grow flex-col gap-y-4 text-center md:gap-y-12">
          <h2 className="text-xl font-bold lg:text-5xl">
            Perks of Exploring with Us
          </h2>
          <ul className="mx-auto flex max-w-[95%] flex-col gap-y-8 px-2 lg:gap-y-10">
            {PerksList.map((perk, key) => (
              <PerksCard key={key} {...perk} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
//https://images.unsplash.com/photo-1602333158618-dd71de539d3b?auto=format&fit=crop&q=60&w=700&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGlrZXJ8ZW58MHwxfDB8fHwy

{
  /* <img
          src='https://images.unsplash.com/photo-1584223719571-778f3f37aa56?auto=format&fit=crop&q=80&w=2187&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='hiker-portrait'
          className='aspect-square h-60 rounded-lg object-cover object-top lg:h-[600px]'
        /> */
}
