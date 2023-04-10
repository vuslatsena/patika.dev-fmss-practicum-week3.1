import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'

import cities from "../data/citiesofturkey.json"
import days from "../data/weekofdays.js"

const WeatherContext = createContext()

export const useWeatherContext = () => useContext(WeatherContext)

const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState({})
  const [activeDay, setActiveDay] = useState(0)
  const [city, setCity] = useState("İstanbul")
  const [error, setError] = useState(false)
  const [location, setLocation] = useState(true)

  useEffect(() => {
    const getWeather = async () => {
      try {
        const { data } = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=1fd50f7748d54336936194552230604&q=${city}&days=7&aqi=no&alerts=no`)
        setWeather(data)
        setError(false)
      } catch (error) {
        setError(error.response)
        console.log(error.response)
      }
    }

    getWeather()
  }, [city])

  useEffect(() => {
    if (navigator.geolocation) {
      location && navigator.geolocation.getCurrentPosition((position) => {
        const latitude = Math.round(position.coords.latitude)
        const longitude = Math.round(position.coords.longitude)

        cities.forEach(item => {
          if (Math.round(item.latitude) === latitude && Math.round(item.longitude) === longitude) {
            setCity(item.name)
            setLocation(false)
          }
        })
      });
    } else {
      console.log("Your browser does not support location information.")
    }
  }, [location])

  const values = {
    weather,
    days,
    activeDay,
    city,
    error,
    setActiveDay,
    setCity,
    today: days[new Date().getDay()]
  }

  return (
    <WeatherContext.Provider value={values}>
      {children}
    </WeatherContext.Provider>
  )
}

export default WeatherProvider
