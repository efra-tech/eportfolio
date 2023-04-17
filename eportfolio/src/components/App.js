import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './Navbar';
import HomePage from './HomePage';


export default function App(props) {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route path='home' element={ <HomePage /> } />
          <Route path='*' element={ <Navigate to='home' /> } />
        </Routes>
      </main>
    </div>
  );
}
