import React from 'react';
import HostingBenefitsCards from './HostingBenefitsCards';
import { FaMoneyBillWave, FaHandHoldingHeart, FaPeoplePulling } from 'react-icons/fa6';
import { IconType } from 'react-icons';

const HostingBenefits = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-10 px-4 md:h-[400px] md:gap-y-20">
      <span className="text-2xl font-bold md:text-4xl">Why Become a Hiking Coordinator?</span>
      <div className="flex flex-col md:flex-row md:gap-x-20">
        {HostingBenefitsList.map((benefit, index) => (
          <HostingBenefitsCards key={index} {...benefit} />
        ))}
      </div>
    </div>
  );
};

export type THostingBenefit = {
  title: string;
  description: string;
  icon: IconType;
};

const HostingBenefitsList: THostingBenefit[] = [
  {
    title: 'Teach Your Way',
    description: 'Inspire others by guiding them through scenic trails.',
    icon: FaHandHoldingHeart,
  },
  {
    title: 'Earn While Exploring',
    description: 'Turn your love for hiking into a rewarding opportunity.',
    icon: FaMoneyBillWave,
  },
  {
    title: 'Build a  Community',
    description: 'Connect with fellow hiking enthusiasts and form meaningful relationships.',
    icon: FaPeoplePulling,
  },
];

export default HostingBenefits;
