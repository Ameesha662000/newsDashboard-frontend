'use client';
import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleDarkMode = () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);
    if (newIsDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header className="bg-white dark:bg-[#475B63] shadow-md p-4 flex justify-between items-center">

      <div className="flex items-center space-x-2">
        <img src='/newDashBoard.png' className='w-[130px] h-[60px]' />
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-[#F3E8EE]">News-DashBoard</h1>
      </div>
      
      <div className="flex items-center space-x-4">
        {user && (
          <span className="text-gray-600 dark:text-[#BACDB0] hidden sm:block">
            Hello , {user.name}
          </span>
        )}
        
        <button
          onClick={toggleDarkMode}
          title="Toggle Dark Mode"
          aria-label="Toggle Dark Mode"
          className="bg-gray-200 dark:bg-[#2E2C2F] hover:bg-gray-300 dark:hover:bg-[#729B79] w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-md transition-colors duration-300"
        >
          {isDarkMode 
            ? <span className="text-[#BACDB0]">🌙</span> 
            : <span className="text-[#729B79]">☀️</span>
          }
        </button>

        {user && (
          <button
            onClick={logout}
            className="bg-[#F3E8EE] text-red-600 border border-red-600 hover:bg-red-500 hover:text-[#ffffff] font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
