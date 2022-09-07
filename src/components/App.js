import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Page from './Page'
import Revisions from './Revisions'
import NewPost from './NewPost'
import Tailwind from './Tailwind'
import '../styles/output.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/page/:pages" element={<Page />} />
      <Route path="/page/:pages/:revisions" element={<Revisions />} />
      <Route path="/page/new/:pages" element={<NewPost />} />
      <Route path="/tailwind" element={<Tailwind />} />
    </Routes>
  </BrowserRouter>
);

export default App;
