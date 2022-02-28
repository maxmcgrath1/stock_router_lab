import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Dashboard from './pages/dashboard';
import Stock from './pages/stock';
import Nav from './components/nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/about" element={<About />} />
        <Route path ="/stocks" element={<Dashboard />} >
          <Route path=":symbol" element={<Stock />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
