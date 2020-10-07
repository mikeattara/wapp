import React, { useState } from "react";
import WeatherInfo from "./components/weather-info";
import { fetchWeather, formatWeatherData } from "./utils/api";
import "./App.css";

function App() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("accra");
  const [error, setError] = useState(null);

  console.warn("IMPLEMENT WARNING FOR ERRORS SUCH AS CITY NOT FOUND!", error);

  const fetchData = (e) => {
    e.preventDefault();

    fetchWeather(city)
      .then((res) => {
        setWeather(formatWeatherData(res.data));
      })
      .catch((err) => {
        setError(err?.response?.data?.message);
      });
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>OUR WEATHER APP</p>
        <form onSubmit={fetchData}>
          <input
            type="text"
            placeholder="enter city"
            value={city}
            onChange={handleInputChange}
          />
          <button type="submit">Search</button>
        </form>
        <div>
          <WeatherInfo {...weather} />
        </div>
      </header>
    </div>
  );
}

export default App;
