import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please provide both email and password.');
      return;
    }

    try {
      // Logging for debugging
      console.log('Logging in with email:', email, 'and password:', password);
      
      // Send login request to the PHP backend
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/login.php`,
        { email, password },
        {
          withCredentials: true, // Enable sending cookies
          headers: { 'Content-Type': 'application/json' }, // Explicit JSON header
        }
      );

      console.log('Login Response:', response.data);

      if (response.data.success) {
        // If login is successful, redirect to contacts page
        navigate('/watchlist');
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('Error logging in. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default Login;
