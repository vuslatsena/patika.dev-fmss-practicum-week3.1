import { BiSearch } from "react-icons/bi";
import cities from "../../data/citiesofturkey.json";
import { useWeatherContext } from '../../context/WeatherContext';
import { useState } from 'react';
import style from './searchInput.module.scss';

const Inputs = () => {
  const [input, setInput] = useState("");
  const { city, setCity } = useWeatherContext();

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

  return (
    <div className={style.inputs}>
      <div className={style.inputBox}>
        <BiSearch size={23} onClick={handleSearch} />
        <input
          type="text"
          placeholder="All around the world"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <br />
      <select value={city} onChange={handleSelect} name="select">
        <option value="">Select a city</option>
        {cities.map(({ id, name }) => (
          <option key={id} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Inputs;
