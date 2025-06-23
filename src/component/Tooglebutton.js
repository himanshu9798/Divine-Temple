import React, { useState } from 'react';
import './Tooglebutton.css'; 


function ToogleButton(){
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const pageStyles = {
    backgroundColor: isDarkMode ? 'black' : 'white',
    color: isDarkMode ? 'white' : 'black',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'background-color 0.3s, color 0.3s',
  };
  function chnage(){
    alert("How Are You")
  }

  return (
    <div style={pageStyles}>
      <div>
   
        <button
          className="unique-button"
          onClick={toggleTheme}
        >
          Toggle Theme
        </button>

        <br/>
        <br/>
        <button text="Click me" onClick={chnage}></button>
      </div>
    </div>
  );
}

export default ToogleButton;
