import React from "react";

const WeatherInfo = ({ temperature, city, country }) => {
  return (
    <div>
      <h2>{temperature}</h2>
      <p>{`${city}, ${country}`}</p>
    </div>
  );
};

export default WeatherInfo;
