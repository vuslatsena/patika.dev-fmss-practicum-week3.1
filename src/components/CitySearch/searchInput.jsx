// Import necessary modules
import { BiSearch } from "react-icons/bi";
import cities from "../../data/citiesofturkey.json";
import { useWeatherContext } from '../../context/WeatherContext';
import { useState } from 'react';
import style from './searchInput.module.scss';

// Define component
const SearchInput = () => {
  // Define state variables
  const [input, setInput] = useState("");
  const { city, setCity } = useWeatherContext();

  // Define event handlers
  const handleSearch = () => {
    if (input.trim() === "") {
      alert("Please select a city");
      return;
    }
    setCity(input.trim());
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSelect = (e) => {
    setCity(e.target.value);
  };

  // Render component
  return (
    <div className={style.searchInput}>
      <div className={style.inputBox}>
        <BiSearch size={23} onClick={handleSearch} />
        <input
          type="text"
          placeholder="Search for a city"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <br />
      <select value={city} onChange={handleSelect} name="select">
        {cities.map((city) => (
          <option key={city.id} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
};

// Export component
export default SearchInput;
