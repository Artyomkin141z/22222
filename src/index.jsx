import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
import{ Routes, Route, Link } from 'react-router-dom';
import Book from './pages/Book';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Home />
      {/* <Routes>
        <Route path='/pages/Book' element={<Book/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes> */}
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();