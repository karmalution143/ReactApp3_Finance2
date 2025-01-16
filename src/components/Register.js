import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }
  
    try {
      // Make sure to send the request as JSON
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/register_user.php`,
        { email, password },
        {
          headers: {
            'Content-Type': 'application/json',  // Ensure the request content type is JSON
          },
        }
      );
  
      console.log(response); 
  
      if (response.data.success) {
        alert('Registration successful!');
        navigate('/login'); // Redirect after successful registration
      } else {
        setError(response.data.message); // Show error message from server
      }
    } catch (error) {
      console.error('Registration failed:', error);
      setError('An error occurred during registration.');
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
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
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}

export default Register;