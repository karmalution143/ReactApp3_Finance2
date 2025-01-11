import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // npm install react-router-dom
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import AddStock from './components/AddStock';
import Watchlist from './components/Watchlist';
import About from './components/About/About';
import EditStock from './components/EditStock';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Watchlist />} />
          <Route path="/about" element={<About />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/add-stock" element={<AddStock />} />
          <Route path="/edit-stock/:id" element={<EditStock />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;