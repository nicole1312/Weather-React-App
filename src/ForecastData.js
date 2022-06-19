import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeatherUpdated from "react-animated-weather-updated";
import "./App.css";

export default function ForecastData() {
  const [city, setCity] = useState(" ");
  const [forecast, setForecast] = useState(" ");
  const [loaded, setLoaded] = useState(false);

  function showWeather(response) {
    setLoaded(true);
    setForecast({
      date: "18 June 2022",
      temperature: response.data.main.temp,
      highTemperature: response.data.main.temp_max,
      lowTemperature: response.data.main.temp_min,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      pressure: response.data.main.pressure,
      icon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "02743828b1081c945744035baeda7192";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }
  function searchUpdate(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  const form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Type a city"
        autoComplete="off"
        onChange={searchUpdate}
        className="form-control"
      />
      <button type="submit" className="btn ">
        Search
      </button>
    </form>
  );
  if (loaded) {
    return (
      <div>
        {form}
        <div className="container">
          <div className="weather">
            <div className="row">
              <div className="col-6">
                <h4>{forecast.date}</h4>
                <h3 className="city">{city}</h3>
                <ul className="details">
                  <li className="description-sky">{forecast.description}</li>
                  <li>
                    <strong>{Math.round(forecast.temperature)}ºC</strong>
                  </li>
                  <div className="highLow">
                    <li>
                      <span>
                        ⇧
                        <strong>{Math.round(forecast.highTemperature)}º</strong>
                      </span>
                    </li>
                    <li>
                      <span>
                        ⇩<strong>{Math.round(forecast.lowTemperature)}º</strong>
                      </span>
                    </li>
                  </div>
                  <li>
                    <img src={forecast.icon} alt={forecast.description} />
                  </li>
                </ul>
              </div>
            </div>
            <div className=" analysis">
              <div className="col-6 ">
                <ul className="analysis-details">
                  <li>
                    <strong>Humidity:</strong>
                    {forecast.humidity}%
                  </li>
                  <li>
                    <strong>Wind:</strong>
                    {Math.round(forecast.wind)}mph
                  </li>
                  <li>
                    <strong>Pressure:</strong>
                    {forecast.pressure}mb
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="week-forecast">
          <div>
            <p className="week-days">Sun</p>
            <div className="temp">
              <span>
                ⇧<strong>21º</strong>
              </span>
              <span>
                ⇩<strong>11º</strong>
              </span>
            </div>

            <p className="icon">
              <ReactAnimatedWeatherUpdated
                icon="CLEAR_DAY"
                color="#95c6ea"
                size={40}
                animate={true}
              />
            </p>
          </div>
          <div>
            <p className="week-days">Mon</p>
            <div className="temp">
              <span>
                ⇧<strong>21º</strong>
              </span>
              <span>
                ⇩<strong>11º</strong>
              </span>
            </div>
            <p className="icon">
              <ReactAnimatedWeatherUpdated
                icon="CLEAR_DAY"
                color="#95c6ea"
                size={40}
                animate={true}
              />
            </p>
          </div>
          <div>
            <p className="week-days">Tue</p>
            <div className="temp">
              <span>
                ⇧<strong>23º</strong>
              </span>
              <span>
                ⇩<strong>13º</strong>
              </span>
            </div>
            <p className="icon">
              <ReactAnimatedWeatherUpdated
                icon="PARTLY_CLOUDY_DAY"
                color="#95c6ea"
                size={40}
                animate={true}
              />
            </p>
          </div>
          <div>
            <p className="week-days">Wed</p>
            <div className="temp">
              <span>
                ⇧<strong>26º</strong>
              </span>
              <span>
                ⇩<strong>13º</strong>
              </span>
            </div>
            <p className="icon">
              <ReactAnimatedWeatherUpdated
                icon="PARTLY_CLOUDY_DAY"
                color="#95c6ea"
                size={40}
                animate={true}
              />
            </p>
          </div>
          <div>
            <p className="week-days">Thu</p>
            <div className="temp">
              <span>
                ⇧<strong>25º</strong>
              </span>
              <span>
                ⇩<strong>14º</strong>
              </span>
            </div>
            <p className="icon">
              <ReactAnimatedWeatherUpdated
                icon="PARTLY_CLOUDY_DAY"
                color="#95c6ea"
                size={40}
                animate={true}
              />
            </p>
          </div>
          <div>
            <p className="week-days">Fri</p>
            <div className="temp">
              <span>
                ⇧<strong>22º</strong>
              </span>
              <span>
                ⇩<strong>13º</strong>
              </span>
            </div>
            <p className="icon">
              <ReactAnimatedWeatherUpdated
                icon="RAIN"
                color="#95c6ea"
                size={40}
                animate={true}
              />
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {form}
        <div className="container">
          <div className="weather">
            <div className="row">
              <div className="col-6">
                <h4>18 June 2022</h4>
                <h3 className="city">london</h3>
                <ul className="details">
                  <li className="description">clear sky</li>
                  <br />
                  <li>
                    <strong>21ºC</strong>
                  </li>
                  <div className="highLow">
                    <li>
                      <span>
                        ⇧<strong>26º</strong>
                      </span>
                    </li>

                    <li>
                      <span>
                        ⇩<strong>11º</strong>
                      </span>
                    </li>
                  </div>
                  <li className="icon">
                    <ReactAnimatedWeatherUpdated
                      icon="CLEAR_DAY"
                      color="#95c6ea"
                      size={50}
                      animate={true}
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className=" analysis">
              <div className="col-6 ">
                <ul className="analysis-details">
                  <li>
                    <strong>Humidity:</strong> 70 %
                  </li>
                  <li>
                    <strong>Wind: </strong>7 mph
                  </li>
                  <li>
                    <strong>Pressure:</strong> 1019 mb
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="week-forecast">
          <div>
            <p className="week-days">Sun</p>
            <div className="temp">
              <span>
                ⇧<strong>21º</strong>
              </span>
              <span>
                ⇩<strong>11º</strong>
              </span>
            </div>

            <p className="icon">
              <ReactAnimatedWeatherUpdated
                icon="RAIN"
                color="#95c6ea"
                size={40}
                animate={true}
              />
            </p>
          </div>
          <div>
            <p className="week-days">Mon</p>
            <div className="temp">
              <span>
                ⇧<strong>21º</strong>
              </span>
              <span>
                ⇩<strong>11º</strong>
              </span>
            </div>
            <p className="icon">
              <ReactAnimatedWeatherUpdated
                icon="CLEAR_DAY"
                color="#95c6ea"
                size={40}
                animate={true}
              />
            </p>
          </div>
          <div>
            <p className="week-days">Tue</p>
            <div className="temp">
              <span>
                ⇧<strong>23º</strong>
              </span>
              <span>
                ⇩<strong>13º</strong>
              </span>
            </div>
            <p className="icon">
              <ReactAnimatedWeatherUpdated
                icon="PARTLY_CLOUDY_DAY"
                color="#95c6ea"
                size={40}
                animate={true}
              />
            </p>
          </div>
          <div>
            <p className="week-days">Wed</p>
            <div className="temp">
              <span>
                ⇧<strong>26º</strong>
              </span>
              <span>
                ⇩<strong>13º</strong>
              </span>
            </div>
            <p className="icon">
              <ReactAnimatedWeatherUpdated
                icon="PARTLY_CLOUDY_DAY"
                color="#95c6ea"
                size={40}
                animate={true}
              />
            </p>
          </div>
          <div>
            <p className="week-days">Thu</p>
            <div className="temp">
              <span>
                ⇧<strong>25º</strong>
              </span>
              <span>
                ⇩<strong>14º</strong>
              </span>
            </div>
            <p className="icon">
              <ReactAnimatedWeatherUpdated
                icon="PARTLY_CLOUDY_DAY"
                color="#95c6ea"
                size={40}
                animate={true}
              />
            </p>
          </div>
          <div>
            <p className="week-days">Fri</p>
            <div className="temp">
              <span>
                ⇧<strong>22º</strong>
              </span>
              <span>
                ⇩<strong>13º</strong>
              </span>
            </div>
            <p className="icon">
              <ReactAnimatedWeatherUpdated
                icon="RAIN"
                color="#95c6ea"
                size={40}
                animate={true}
              />
            </p>
          </div>
        </div>
      </div>
    );
  }
}
