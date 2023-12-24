import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import FrontPage from './FrontPage';
import SlotMachine from './slotmachine';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/play" element={<SlotMachine />} />
        <Route path="/" element={<FrontPage />} />
      </Routes>
    </Router>
  );
}

export default App;
