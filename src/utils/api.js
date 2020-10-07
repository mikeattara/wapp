import Axios from "axios";

export const fetchWeather = (cityName) => {
  const APIKey = process.env.REACT_APP_API_KEY;
  return Axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}`
  );
};

export const formatWeatherData = (data) => ({
  temperature: data.main.temp,
  city: data.name,
  country: data.sys.country,
});
