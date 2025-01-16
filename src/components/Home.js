import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const App = () => {
  const [topStock, setTopStock] = useState(null);
  const [date, setDate] = useState('');

  useEffect(() => {
    // Get the current date in the desired format (e.g., "January 2025")
    const today = new Date();
    const options = { year: 'numeric', month: 'long' };
    setDate(today.toLocaleDateString('en-US', options));

    // Fetch the top stock of the month (simulated data for now)
    // In a real app, you can fetch this data from your API
    setTopStock({
      name: 'Tesla Inc.',
      symbol: 'TSLA',
      price: 400.00,
      change: '+5.2%',
    });
  }, []);

  return (
    <div className="home-screen">
      <div className="login-register-section">
        <h2>Welcome! Please Login or Register</h2>
        <div className="login-register-buttons">
          <Link to="/login" className="nav-link">
              <button>Login</button>
          </Link>
          <Link to="/register" className="nav-link">
              <button>Register</button>
          </Link>
        </div>
      </div>
      <div className="stock-of-the-month-section">
        <h2>Top Stock of the Month</h2>
        {topStock ? (
          <div className="stock-info">
            <p><strong>{topStock.name} ({topStock.symbol})</strong></p>
            <p>Price: ${topStock.price.toFixed(2)}</p>
            <p>Change: {topStock.change}</p>
            <p>Date: {date}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default App;
