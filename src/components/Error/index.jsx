import { useWeatherContext } from '../../context/WeatherContext';
import styles from './error.module.scss';

// Defining the Error component
const Error = () => {
  // Using the useWeatherContext hook to access the error state
  const { error } = useWeatherContext();

  // Rendering the error message if it exists
  return (
    <div className={styles.error}>
      {`${error.status} ${error.statusText}`}
    </div>
  );
};

// Exporting the Error component as the default export
export default Error;
