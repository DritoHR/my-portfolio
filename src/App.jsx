// src/App.jsx
import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PresentationSection from './components/presentationSection/PresentationSection';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <PresentationSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
