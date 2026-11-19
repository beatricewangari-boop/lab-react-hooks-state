import React from 'react';

function DarkModeToggle({ darkMode, setDarkMode }) {
    return (
   <button onClick={() => setDarkMode(!darkMode)}>
    {darkMode ? "Toggle Dark Mode" : "Toggle Light Mode"}
   </button>
  );
}

export default DarkModeToggle;
