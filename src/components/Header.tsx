import React from 'react';
import { User, LogOut } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { clearProfile } from '../store/profileSlice';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentProfile = useAppSelector((state) => state.profile.currentProfile);

  const handleLogout = () => {
    dispatch(clearProfile());
  };

  const getProfileColor = () => {
    switch (currentProfile) {
      case 'recruiter': return 'bg-blue-600';
      case 'stacker': return 'bg-green-600';
      case 'developer': return 'bg-purple-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black to-transparent p-4 md:p-6">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl md:text-3xl font-bold text-red-600">Portfolio</h1>
          <span className="text-white capitalize text-lg hidden md:block">
            {currentProfile} View
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <div className={`w-8 h-8 md:w-10 md:h-10 ${getProfileColor()} rounded-full flex items-center justify-center`}>
            <User size={20} className="text-white" />
          </div>
          <button
            onClick={handleLogout}
            className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded"
            title="Switch Profile"
          >
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;