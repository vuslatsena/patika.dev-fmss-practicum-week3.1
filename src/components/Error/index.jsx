import { useWeatherContext } from '../../context/WeatherContext';
import styles from './error.module.scss';

const Error = () => {
  const { error } = useWeatherContext();

  return (
    <div className={styles.error}>
      {`${error.status} ${error.statusText}`}
    </div>
  );
};

export default Error;
