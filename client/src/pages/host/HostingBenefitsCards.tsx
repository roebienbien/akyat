import React from 'react';
import { THostingBenefit } from './HostingBenefits';

const HostingBenefitsCards: React.FC<THostingBenefit> = ({ title, description, icon: Icon }) => {
  return (
    <div className="flex rounded p-4 md:w-1/3">
      <div className="flex flex-col items-center gap-4 text-center">
        <Icon className="text-4xl text-green-800 lg:text-7xl" />
        <span className="text-2xl font-bold">{title}</span>
        <p className="max-w-xs text-base">{description}</p>
      </div>
    </div>
  );
};

export default HostingBenefitsCards;
