import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Stock from './components/Stock';

const App = () => (
  <Routes>
    <Route path="/" element={<Portfolio />} />
    <Route path="/stocks/:symbol" element={<Stock />} />
  </Routes>
);

export default App;
