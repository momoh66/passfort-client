import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Page from './Page'
import '../styles/output.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/page/:pages" element={<Page />} />
    </Routes>
  </BrowserRouter>
);

export default App;
