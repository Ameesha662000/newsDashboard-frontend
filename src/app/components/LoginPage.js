'use client';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    const success = login(email, password);
    if (!success) {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-[#475B63] p-4"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full max-w-md bg-white dark:bg-[#2E2C2F] bg-opacity-90 dark:bg-opacity-90 rounded-2xl shadow-xl p-8">
        <div className="flex justify-center mb-4">
          <img src="/newDashBoard.png" alt="Logo" className="w-[120px] h-[100px]" />
        </div>
        <p className="text-center text-gray-500 dark:text-[#BACDB0] mb-8">Login to continue</p>
        <form onSubmit={handleSubmit}>
          {error && <p className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">{error}</p>}
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-[#BACDB0] text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input
              className="w-full px-4 py-3 rounded-lg bg-gray-200 dark:bg-[#3A3A3C] text-gray-800 dark:text-[#F3E8EE] border border-transparent focus:border-[#729B79] focus:ring-[#729B79] focus:ring-2 focus:bg-white dark:focus:bg-[#2E2C2F] focus:outline-none"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-[#BACDB0] text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input
              className="w-full px-4 py-3 rounded-lg bg-gray-200 dark:bg-[#3A3A3C] text-gray-800 dark:text-[#F3E8EE] border border-transparent focus:border-[#729B79] focus:ring-[#729B79] focus:ring-2 focus:bg-white dark:focus:bg-[#2E2C2F] focus:outline-none"
              id="password"
              type="password"
              placeholder="**********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            className="w-full bg-[#729B79] hover:bg-[#5d7d66] text-white font-bold py-3 px-4 rounded-lg transition duration-300"
            type="submit"
          >
            Login
          </button>
          <p className="text-center text-gray-500 dark:text-[#BACDB0] mt-4">
            test email : test@test.com password : test<br />
            admin email :admin@admin.com password : admin
            </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
