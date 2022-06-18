import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import ForecastData from "./ForecastData";

import reportWebVitals from "./reportWebVitals";

function App() {
  return (
    <div className="App">
      <div className="box">
        <h1>TheWeatherHub</h1>
        <div>
          <ForecastData />
        </div>
        <div></div>
      </div>

      <small>
        <a
          href="https://github.com/nicole1312/weather-hub-project"
          target="_blank"
          className="source"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>
        by Nicoleta Serban
      </small>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
