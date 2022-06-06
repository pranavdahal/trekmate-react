import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Packages from './pages/packages';
import Contacts from './pages/contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<App />}>
      <Route path='home' element={<Home/>}/>
      <Route path='services' element={<Services/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='packages' element={<Packages/>}/>
      <Route path='contacts' element={<Contacts/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
