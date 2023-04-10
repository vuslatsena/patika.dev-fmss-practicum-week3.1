import ActiveDay from "./components/ActiveDay";
import Week from "./components/Week"
import SearchInput from "./components/CitySearch/searchInput";
import WeatherProvider from "./context/WeatherContext";
import WeatherAppHeader from "./components/Header/header"; // import the WeatherAppHeader component
import "./css/index.css"
import "./css/app.scss"

function App() {
  return (
    <WeatherProvider>
      <div className="container">
        <WeatherAppHeader /> {/* add the WeatherAppHeader component */}
        <SearchInput />
        <div className="box">
          <ActiveDay /> 
        </div>
        <Week />
      </div>
    </WeatherProvider>
  );
}

export default App;
