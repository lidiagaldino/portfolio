import React from 'react';

// import components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Courses from './components/Courses';

const App = () => {
  return <div>
    <Header />
    <Hero />
    <About />
    <Skills />
    <Portfolio />
    <Courses />
  </div>;
};

export default App;
