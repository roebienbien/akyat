import React from 'react';

const AkyatStatistics = () => {
  return (
    <div className="flex h-52 justify-evenly bg-green-700">
      {Statistics.map((statistic, index) => (
        <div key={index} className="flex flex-col items-center justify-center text-white">
          <span className="text-5xl font-bold">{statistic.number}</span>
          <span className="text-lg">{statistic.title}</span>
        </div>
      ))}
    </div>
  );
};

type TStatistic = {
  title: string;
  number: string;
};

const Statistics: TStatistic[] = [
  {
    title: 'Hikers',
    number: '1,000+',
  },
  {
    title: 'Trails',
    number: '24',
  },
  {
    title: 'Hikes Organized',
    number: '500+',
  },
  {
    title: 'Coordinators',
    number: '50',
  },
  {
    title: 'Reviews',
    number: '2,000+',
  },
];

export default AkyatStatistics;
