import React, { useState } from 'react';
import './App.css';
import "./service/interceptor";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Weather from "./components/weather/Weather";
import Geolocation from './components/geolocation/Geolocation';


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
      <Router>
        <Switch>
          <div className="container-fluid">
            <div className="container search-box">
              <h1>Search Weather <span className="text-muted">by <Link to="/city">city</Link> or, <Link to="/geolocation">geolocation</Link>
              </span></h1>
              <Route path="/city">
                <Weather />
              </Route>
              <Route path="/geolocation">
                <Geolocation />
              </Route>
            </div>
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
