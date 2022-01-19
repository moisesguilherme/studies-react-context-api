import { useState } from 'react';
import './App.css';
import Routes from './Router';
import { Theme, ThemeContext } from './ThemeContext';

function App() {
  const [theme, setTheme] = useState<Theme>('LIGHT');

  
  return (
    <div className="App">
      <ThemeContext.Provider value={{theme, setTheme }}>
        <Routes />  
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
