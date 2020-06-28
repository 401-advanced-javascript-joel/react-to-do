import React from 'react';
import Header from './components/Header';
import ToDo from './components/ToDo';
import Footer from './components/Footer';
import './scss/main.scss';

function App() {
  return (
    <>
      <Header />
      <ToDo />
      <Footer />
    </>
  );
}

export default App;
