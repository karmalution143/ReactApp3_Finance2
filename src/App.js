import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // npm install react-router-dom
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import AddStock from './components/AddStock';
import Watchlist from './components/Watchlist';
import About from './components/About/About';
import EditStock from './components/EditStock';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/add-stock" element={<AddStock />} />
          <Route path="/edit-stock/:id" element={<EditStock />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;