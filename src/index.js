import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Switch } from 'react-router-dom';
import WeatherForecast from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Switch>
      <Route path="/:day" exact component={WeatherForecast} />
      <Route path="/" exact component={WeatherForecast} />
    </Switch>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
