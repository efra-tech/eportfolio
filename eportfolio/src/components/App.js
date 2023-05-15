import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './Navbar';
import Bio from './Bio';
import Resume from './Resume';
import Portfolio from './Portfolio';

import 'bootstrap/dist/css/bootstrap.min.css';


export default function App(props) {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route path='/' element={ <Bio /> } />
          <Route path='resume' element={ <Resume /> } />
          <Route path='portfolio' element={ <Portfolio /> } />
          <Route path='*' element={ <Navigate to='/' /> } />
        </Routes>
      </main>

      <footer>
        {/* <p className=''>icons are from ""</p> */}
      </footer>
    </div>
  );
}
