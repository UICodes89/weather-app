import React from 'react';
import './App.css';
import "./service/interceptor";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Weather from "./components/weather/Weather";
import Geolocation from './components/geolocation/Geolocation';



function App() {

  return (
    <>
      <Router>
        <Switch>
          <div className="container-fluid">
            <div className="container search-box">
              <h1>Search Weather <span className="text-muted">by <Link to="/city">city</Link> or, <Link to="/geolocation">geolocation</Link>
              </span></h1>
              <Route
                exact
                path="/"
                render={() => {
                  return (<Weather />)
                }}
              />
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
