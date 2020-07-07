import React, { useState } from 'react';
import Header from './components/Header';
import ToDo from './components/ToDo';
import Footer from './components/Footer';
import SettingsContext from './contexts/SettingsContext';
import './styles.scss';

function App() {
  const [taskCount, setTaskCount] = useState(3);
  const [showComplete, setShowComplete] = useState(true);
  return (
    <>
      <Header />
      <SettingsContext.Provider
        value={{ taskCount, setTaskCount, showComplete, setShowComplete }}
      >
        <ToDo />
      </SettingsContext.Provider>
      <Footer />
    </>
  );
}

export default App;
