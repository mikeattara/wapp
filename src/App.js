import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";

import WeatherInfo from "./components/weather-info";
import { fetchWeather, formatWeatherData } from "./utils/api";

const StyledDiv = styled.div`
  border: 2px solid white;
  border-radius: 2px;
  padding: 2rem;
`;

function App() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("accra");
  const [error, setError] = useState(null);

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
        <StyledDiv>
          <WeatherInfo {...weather} />
        </StyledDiv>
      </header>
    </div>
  );
}

export default App;
