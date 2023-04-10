// Importing the necessary dependencies
import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';

// Importing the city and day data
import cities from '../data/citiesofturkey.json';
import days from '../data/weekofdays.js';

// Creating the WeatherContext
const WeatherContext = createContext();

// Creating a custom hook to access the WeatherContext
export const useWeatherContext = () => useContext(WeatherContext);

// Defining the WeatherProvider component
const WeatherProvider = ({ children }) => {
  // Defining the state variables
  const [weather, setWeather] = useState({});
  const [activeDay, setActiveDay] = useState(0);
  const [city, setCity] = useState('İstanbul');
  const [error, setError] = useState(false);
  const [location, setLocation] = useState(true);
  const today = days[new Date().getDay()];
  const values = {
    weather,
    days,
    activeDay,
    city,
    error,
    setActiveDay,
    setCity,
    today,
  };

  // Fetching the weather data based on the selected city
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const { data } = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=1fd50f7748d54336936194552230604&q=${city}&days=7&aqi=no&alerts=no`);
        setWeather(data);
        setError(false);
      } catch (error) {
        setError(error.response);
        console.error(error.response);
      }
    };
    fetchWeather();
  }, [city]);

  // Getting the user's location using the geolocation API
  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation?.getCurrentPosition) {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
          const matchingCity = cities.find((city) => city.latitude === latitude && city.longitude === longitude);
          if (matchingCity) {
            setCity(matchingCity.name);
            setLocation(false);
          }
        });
      } else {
        console.log('Your browser does not support location information.');
      }
    };
    if (location) {
      getLocation();
    }
  }, [location]);

  return (
    <WeatherContext.Provider value={values}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
