import "./css/reset.css"
import "./css/app.scss"
import ActiveDay from "./components/ActiveDay";
import Week from "./components/Week"
import Inputs from "./components/Inputs";
import WeatherProvider from "./context/WeatherContext";



function App() {


  return (
    <WeatherProvider>
      <div className="container">
        <Inputs />
        <div className="box">
              <ActiveDay /> 
        </div>
        <Week />
      </div>
    </WeatherProvider>
  );
}

export default App;
