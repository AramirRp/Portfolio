// ThemeSwitcher.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 p-2 rounded-full shadow-lg transition-colors duration-200 ease-in-out
                 light:bg-gray-200 light:text-gray-800
                 dark:bg-gray-800 dark:text-white
                 custom:bg-purple-500 custom:text-white"
    >
      {theme === 'light' ? '☀️' : theme === 'dark' ? '🌙' : '🌈'}
    </button>
  );
};

export default ThemeSwitcher;