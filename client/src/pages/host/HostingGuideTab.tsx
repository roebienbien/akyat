import React from 'react';
import UnsplashImage from '../../components/ui/UnsplashImage';
import { TTabLinks } from './HostingGuide';

type Props = {
  content: string;
  imageUrl: string;
  title: string;
};

const HostingGuideTab = ({ title, content, imageUrl }: Props) => {
  return (
    <div className="flex items-center justify-center gap-x-8">
      <p className="mx-auto max-w-md text-start text-2xl">{content}</p>
      <UnsplashImage photoId={imageUrl} alt={title} className="mx-auto h-[600px] w-[500px] max-w-md" />
    </div>
  );
};

export default HostingGuideTab;
