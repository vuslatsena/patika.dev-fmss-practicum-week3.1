import { useWeatherContext } from "../../context/WeatherContext"
import { formatDate } from "../../utils"
import Error from "../Error"
import style from "./activeDay.module.scss"

const ActiveDay = () => {

  const { weather, activeDay, error } = useWeatherContext()
  return (
    <div className={style.activeCard}>
      {

        // Error displaying section.
        error
          ?
          <Error />
          :
          <>
            <h3>{weather?.location?.name.toUpperCase()}</h3>
            <div className={style.info}>
              <p>{weather?.forecast?.forecastday[activeDay].day.condition.text}</p>
              <p>{formatDate(weather?.forecast?.forecastday[activeDay].date)}</p>
            </div>
            <img src={weather?.forecast?.forecastday[activeDay].day.condition.icon} alt="" />
            <h1>{Math.round(weather?.forecast?.forecastday[activeDay].day.avgtemp_c)}°</h1>
            <div className={style.minmax}>
              <div className={style.min}>
                <h4>min</h4>
                <p>{Math.round(weather?.forecast?.forecastday[activeDay].day.mintemp_c)}°</p>
              </div>
              <div className={style.max}>
                <h4>max</h4>
                <p>{Math.round(weather?.forecast?.forecastday[activeDay].day.maxtemp_c)}°</p>
              </div>
            </div>
          </>
      }
    </div>

  )
}

export default ActiveDay