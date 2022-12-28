import './App.css';
import './index.css'

import React from 'react';
import Home from './pages/Home.jsx';
import Listing from './pages/List.jsx'
import NotFound from './pages/NotFound.jsx';
import Footer from './components/Footer';
import Header from './components/Header';

// import { Provider } from 'react-redux';
// import { store } from './app/store'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Navigation from './components/Navigation';

// Every data needs to get an access to redux
 // Then our app needs to be enrolled by a  " PROVIDER "
 const App = () => {
  return (
    // <Provider store={store}>
       
    <BrowserRouter>
    <Navigation/>
    <Header/>
    <Routes>
    
      < Route path="/" element={<Home/>} />
      < Route path="/listing" element={<Listing/>} />
      < Route path="*" element={<NotFound/>} />
    </Routes>
    <Footer/>
     </BrowserRouter>
 
    // </Provider>
  );
};
export default App;
