import { useEffect, useState } from 'react'

function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }

    // Comment this return line to keep the dark mode when you navigate to another page
    return () => {
      document.body.classList.remove('dark');
    };
  }, [isDarkMode]);
  
  return [isDarkMode, setIsDarkMode]

}

export default useDarkMode