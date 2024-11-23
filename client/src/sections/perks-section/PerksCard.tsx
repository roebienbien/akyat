import { TPerks } from './perks-list';

export default function PerksCard({ icon: Icon, perk, description }: TPerks) {
  return (
    <div className="flex h-60 flex-col items-center justify-center gap-2 rounded-xl border border-gray-400 text-center shadow-xl md:w-1/3">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 p-2 md:h-12 md:w-12">
        <Icon className="fill-white text-sm md:text-base lg:text-xl" />
      </div>
      <div className="flex w-3/4 flex-col">
        <span className="text-sm font-semibold lg:text-lg">{perk}</span>
        <p className="text-xs text-gray-500 md:mt-2 lg:text-sm">{description}</p>
      </div>
    </div>
  );
}
