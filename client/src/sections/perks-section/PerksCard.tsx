import { TPerks } from './perks-list';

export default function PerksCard({ icon: Icon, perk, description }: TPerks) {
  return (
    <div className="flex h-60 w-1/3 flex-col items-center justify-center gap-2 rounded-xl text-center shadow-xl">
      <div className="flex aspect-square h-4 items-center justify-center rounded-full bg-green-600 p-2 md:h-12 md:w-12">
        <Icon className="fill-white text-sm md:text-base lg:text-xl" />
      </div>
      <div className="flex w-3/4 flex-col">
        <span className="text-sm font-semibold lg:text-lg">{perk}</span>
        <p className="text-xs text-gray-500 md:mt-2 lg:text-sm">{description}</p>
      </div>
    </div>
  );
}
