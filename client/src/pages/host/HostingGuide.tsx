import React, { useState } from 'react';
import HostingGuideTab from './HostingGuideTab';

type TId = 1 | 2 | 3;

export type TTabLinks = {
  title: string;
  id: TId;
  content: string;
  imageUrl: string;
};

export type TabsProps = {
  tabs: TTabLinks[];
};

const HostingGuide: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<TId>(tabs[0].id);

  // Find active tab data once, avoiding repetitive lookups
  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  if (!activeTabData) {
    return <div>No content available</div>;
  }

  return (
    <div className="flex h-screen flex-col gap-y-8 p-6 text-center">
      {/* Tab Buttons */}
      <h3 className="mb-4 text-4xl font-bold">How to begin</h3>
      <div className="mx-auto flex w-fit justify-center gap-x-20 border-b-2 border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 text-2xl font-semibold ${activeTab === tab.id ? 'border-b-4 border-green-600' : 'text-gray-600'}`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Active Tab Content */}
      <div className="flex justify-center rounded-md">
        <HostingGuideTab {...activeTabData} />
      </div>
    </div>
  );
};

export default HostingGuide;
