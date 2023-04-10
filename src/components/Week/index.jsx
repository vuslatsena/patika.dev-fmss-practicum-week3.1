import { useWeatherContext } from '../../context/WeatherContext';
import styles from './week.module.scss';

const Week = () => {
  const { weather, days, activeDay, setActiveDay, error } = useWeatherContext();

  const handleClick = (date) => {
    const activeDayIndex = weather?.forecast?.forecastday.findIndex(item => item.date === date);
    setActiveDay(activeDayIndex !== -1 ? activeDayIndex : 0);
  };

  return (
    <div className={styles.week}>
      {error && <p>There was an error fetching the weather data.</p>}
      {!error && weather?.forecast?.forecastday.map((day) => {
        const dayName = days[new Date(day.date).getDay()];
        const isActiveDay = day.date === weather?.forecast?.forecastday[activeDay]?.date;

        return (
          <div
            key={day.date}
            className={`${styles.day} ${isActiveDay ? styles.active : ''}`}
            onClick={() => handleClick(day.date)}
          >
            <h3>{dayName}</h3>
            <img src={day.day.condition.icon} alt={day.day.condition.text} />
            <p>{`${Math.round(day.day.avgtemp_c)}°C`}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Week;
