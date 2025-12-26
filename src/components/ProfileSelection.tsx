import React from 'react';
import { User, Code, Layers, Briefcase } from 'lucide-react';
import { useAppDispatch } from '../hooks/redux';
import { setCurrentProfile, ProfileType } from '../store/profileSlice';

const profiles = [
  {
    id: 'recruiter' as ProfileType,
    name: 'Recruiter',
    description: 'View candidate profiles and skills',
    icon: Briefcase,
    color: 'bg-blue-600',
  },
  {
    id: 'stacker' as ProfileType,
    name: 'Stacker',
    description: 'Explore technology stacks and tools',
    icon: Layers,
    color: 'bg-green-600',
  },
  {
    id: 'developer' as ProfileType,
    name: 'Developer',
    description: 'Check out projects and code',
    icon: Code,
    color: 'bg-purple-600',
  },
];

const ProfileSelection: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleProfileSelect = (profileId: ProfileType) => {
    dispatch(setCurrentProfile(profileId));
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Who's browsing?
          </h1>
          <p className="text-gray-400 text-lg md:text-xl">
            Choose your viewing experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {profiles.map((profile) => {
            const IconComponent = profile.icon;
            return (
              <div
                key={profile.id}
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
                onClick={() => handleProfileSelect(profile.id)}
              >
                <div className="bg-gray-900 rounded-lg p-8 text-center hover:bg-gray-800 transition-colors">
                  <div className={`w-20 h-20 ${profile.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {profile.name}
                  </h3>
                  <p className="text-gray-400">
                    {profile.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfileSelection;