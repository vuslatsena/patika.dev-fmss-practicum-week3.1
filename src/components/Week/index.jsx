import { useWeatherContext } from '../../context/WeatherContext';
import styles from './week.module.scss';

const Week = () => {
  // Get weather data, days of the week, active day, and error flag from the context
  const { weather, days, activeDay, setActiveDay, error } = useWeatherContext();

  // Set the active day based on the date that is clicked by the user
  const handleClick = (date) => {
    const activeDayIndex = weather?.forecast?.forecastday.findIndex(item => item.date === date);
    setActiveDay(activeDayIndex !== -1 ? activeDayIndex : 0);
  };

  return (
    // A div with a class name "week"
    <div className={styles.week}>
      {error && <p>There was an error fetching the weather data.</p>}
      {!error && weather?.forecast?.forecastday.map((day) => {
        // Get the name of the day (e.g. Monday, Tuesday) from the days array
        const dayName = days[new Date(day.date).getDay()];
        // Check if the current day is the active day
        const isActiveDay = day.date === weather?.forecast?.forecastday[activeDay]?.date;

        return (
          // A div for each day with a class name "day" and "active" if it's the active day
          <div
            key={day.date}
            className={`${styles.day} ${isActiveDay ? styles.active : ''}`}
            onClick={() => handleClick(day.date)}
          >
            {/* The name of the day */}
            <h3>{dayName}</h3>
            {/* The weather icon */}
            <img src={day.day.condition.icon} alt={day.day.condition.text} />
            {/* The average temperature */}
            <p>{`${Math.round(day.day.avgtemp_c)}°C`}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Week;
