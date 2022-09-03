import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Page from './Page'
import Revisions from './Revisions'
import '../styles/output.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/page/:pages" element={<Page />} />
      <Route path="/page/:pages/:revisions" element={<Revisions />} />
    </Routes>
  </BrowserRouter>
);

export default App;
