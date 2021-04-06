import React from 'react';
import {
  Header,
  Hero,
  About,
  Courses,
  Podcast,
  Contact,
  Footer,
} from './resources/containers';

import './App.css';

const App = () => (
  <div className="App">
    <Header />

    <Hero />

    <About />

    <Courses />

    <Podcast />

    <Contact />

    <Footer />
  </div>
);

export default App;
