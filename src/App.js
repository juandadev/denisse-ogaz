import React from 'react';
import { Header, Hero, About, Courses, Podcast } from './resources/containers';

import './App.css';

const App = () => (
  <div className="App">
    <Header />

    <Hero />

    <About />

    <Courses />

    <Podcast />
  </div>
);

export default App;
