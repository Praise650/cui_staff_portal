import React, { useState } from 'react';
import LeftPanel from './components/left_panel';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Placeholder for login logic (e.g., API call)
    if (email && password) {
      // Example: Simulate successful login
      console.log('Logging in with:', { email, password });
      navigate('/home'); // Navigate to Home page on success
    } else {
      alert('Please enter email and password');
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Login Form */}
      <LeftPanel
        setEmail={setEmail} // Pass setEmail directly
        setPassword={setPassword}
        handleClick={handleLogin}
      />

      {/* Right Panel - Welcome Section (Hidden on smaller screens) */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-purple-600 to-purple-800 flex-col justify-center items-center px-12 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 rounded-full border border-white"></div>
          <div className="absolute bottom-32 right-16 w-24 h-24 rounded-full border border-white"></div>
          <div className="absolute top-1/2 left-8 w-16 h-16 rounded-full border border-white"></div>
        </div>

        <div className="relative z-10 text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Welcome to<br />
            <span className="text-purple-200">student portal</span>
          </h1>
          <p className="text-purple-200 text-lg">Login to access your account</p>
        </div>

        {/* Illustration */}
        <div className="relative z-10">
          <svg width="300" height="250" viewBox="0 0 300 250" className="text-white">
            {/* Large document/tablet */}
            <rect x="120" y="80" width="120" height="150" rx="8" fill="white" opacity="0.9" />

            {/* Document lines */}
            <line x1="135" y1="100" x2="225" y2="100" stroke="#8B5CF6" strokeWidth="2" opacity="0.6" />
            <line x1="135" y1="115" x2="210" y2="115" stroke="#8B5CF6" strokeWidth="2" opacity="0.4" />
            <line x1="135" y1="130" x2="225" y2="130" stroke="#8B5CF6" strokeWidth="2" opacity="0.4" />
            <line x1="135" y1="145" x2="195" y2="145" stroke="#8B5CF6" strokeWidth="2" opacity="0.4" />
            <line x1="135" y1="160" x2="225" y2="160" stroke="#8B5CF6" strokeWidth="2" opacity="0.4" />
            <line x1="135" y1="175" x2="205" y2="175" stroke="#8B5CF6" strokeWidth="2" opacity="0.4" />
            <line x1="135" y1="190" x2="220" y2="190" stroke="#8B5CF6" strokeWidth="2" opacity="0.4" />

            {/* Circular element */}
            <circle cx="160" cy="140" r="15" fill="none" stroke="#8B5CF6" strokeWidth="2" opacity="0.6" />

            {/* Person 1 - Left figure */}
            <g transform="translate(50, 120)">
              {/* Head */}
              <circle cx="20" cy="15" r="12" fill="white" />
              {/* Hair */}
              <path d="M8 10 Q20 5 32 10 Q32 20 20 18 Q8 20 8 10" fill="#374151" />
              {/* Body */}
              <rect x="10" y="25" width="20" height="35" rx="3" fill="white" />
              {/* Arms */}
              <rect x="5" y="30" width="8" height="20" rx="2" fill="white" />
              <rect x="27" y="30" width="8" height="20" rx="2" fill="white" />
              {/* Legs */}
              <rect x="12" y="58" width="6" height="25" rx="2" fill="white" />
              <rect x="22" y="58" width="6" height="25" rx="2" fill="white" />
              {/* Feet */}
              <ellipse cx="15" cy="85" rx="4" ry="2" fill="#1F2937" />
              <ellipse cx="25" cy="85" rx="4" ry="2" fill="#1F2937" />
              {/* Phone/device in hand */}
              <rect x="0" y="35" width="6" height="10" rx="1" fill="#8B5CF6" />
            </g>

            {/* Person 2 - Right figure on document */}
            <g transform="translate(190, 50)">
              {/* Head */}
              <circle cx="20" cy="15" r="12" fill="white" />
              {/* Hair */}
              <path d="M8 8 Q20 3 32 8 Q30 18 20 16 Q10 18 8 8" fill="#374151" />
              {/* Body */}
              <rect x="10" y="25" width="20" height="35" rx="3" fill="white" />
              {/* Arms */}
              <rect x="5" y="30" width="8" height="20" rx="2" fill="white" />
              <rect x="27" y="30" width="8" height="20" rx="2" fill="white" />
              {/* Legs */}
              <rect x="12" y="58" width="6" height="25" rx="2" fill="white" />
              <rect x="22" y="58" width="6" height="25" rx="2" fill="white" />
              {/* Feet */}
              <ellipse cx="15" cy="85" rx="4" ry="2" fill="#1F2937" />
              <ellipse cx="25" cy="85" rx="4" ry="2" fill="#1F2937" />
              {/* Laptop */}
              <rect x="15" y="20" width="12" height="8" rx="1" fill="#374151" />
              <rect x="16" y="21" width="10" height="6" rx="0.5" fill="#8B5CF6" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Login;