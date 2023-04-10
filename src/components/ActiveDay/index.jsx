import { useWeatherContext } from "../../context/WeatherContext";
import { formatDate } from "../../utils";
import Error from "../Error";
import style from "./activeDay.module.scss";

const ActiveDay = () => {
  const { weather, activeDay, error } = useWeatherContext();

  const forecast = weather?.forecast?.forecastday[activeDay].day;
  const icon = forecast?.condition.icon;
  const avgTemp = Math.round(forecast?.avgtemp_c);
  const minTemp = Math.round(forecast?.mintemp_c);
  const maxTemp = Math.round(forecast?.maxtemp_c);
  const conditionText = forecast?.condition.text;
  const locationName = weather?.location?.name.toUpperCase();
  const formattedDate = weather?.forecast?.forecastday[activeDay].date;
  
  return (
    <div className={style.activeDayCard}>
      {error ? (
        <Error />
      ) : (
        <>
          <h3>{locationName}</h3>
          <div className={style.info}>
          <p>{formatDate(formattedDate)}</p>
          </div>
          <img src={icon} alt="" />
          <h1>{avgTemp}°</h1>
          <div className={style.info}>
            <p>{conditionText}</p>
          </div>
          <div className={style.minmax}>
            <div className={style.min}>
              <h4>min</h4>
              <p>{minTemp}°</p>
            </div>
            <div className={style.max}>
              <h4>max</h4>
              <p>{maxTemp}°</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ActiveDay;
