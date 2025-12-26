import React from 'react';
import { useAppSelector } from '../hooks/redux';
import Header from './Header';
import HeroSection from './HeroSection';
import ContentRow from './ContentRow';
import { recruiterContent, stackerContent, developerContent } from '../data/contentData';

const MainPortfolio: React.FC = () => {
  const currentProfile = useAppSelector((state) => state.profile.currentProfile);

  const getContent = () => {
    switch (currentProfile) {
      case 'recruiter':
        return (
          <>
            <ContentRow title="Featured Projects" items={recruiterContent.featured.projects} />
            <ContentRow title="Core Skills" items={recruiterContent.featured.skills} />
          </>
        );
      case 'stacker':
        return (
          <>
            <ContentRow title="Frontend Technologies" items={stackerContent.frontend} />
            <ContentRow title="Backend & Infrastructure" items={stackerContent.backend} />
          </>
        );
      case 'developer':
        return (
          <>
            <ContentRow title="Recent Projects" items={developerContent.recent} />
            <ContentRow title="Open Source Contributions" items={developerContent.opensource} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-black min-h-screen">
      <Header />
      <HeroSection />
      <div className="pb-20">
        {getContent()}
      </div>
    </div>
  );
};

export default MainPortfolio;