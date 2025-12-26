import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { useAppSelector } from './hooks/redux';
import ProfileSelection from './components/ProfileSelection';
import MainPortfolio from './components/MainPortfolio';

const AppContent: React.FC = () => {
  const currentProfile = useAppSelector((state) => state.profile.currentProfile);

  return (
    <div className="App">
      {currentProfile ? <MainPortfolio /> : <ProfileSelection />}
    </div>
  );
};

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;