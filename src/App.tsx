import React, { useState } from 'react';
import './App.css';
import Weather from "./components/weather/Weather";

interface AppContextInterface {
  theme: string,
  changeTheme: Function
}

export const ThemeContext = React.createContext<AppContextInterface | null>(null);
function App() {
  const [theme, changeTheme] = useState("red");
  const sampleAppContext: AppContextInterface = {
    theme, changeTheme
  }
  return (
    <>
      <ThemeContext.Provider value={sampleAppContext}>
        <div className="container-fluid">
          <div className="container">
            <Weather />
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
