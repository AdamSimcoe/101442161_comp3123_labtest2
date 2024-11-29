// Created by Adam Simcoe - 101442161
// Last Updated - November 28th, 2024

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import './styles.css';
import SearchBar from './components/SearchBar/SearchBar';
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay';

function App() {
  
  // State to store weather data
  const [weatherData, setWeatherData] = useState(null);

  // State to store error message
  const [errorMessage, setErrorMessage] = useState('');

  // function to grab weather data from API
  const getWeatherData = async (city) => {
    try {
      // GET request to get weather data from the API using API key
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c6a1864a244fd4fec1d7644092d112b5&units=metric`);
      
      // Store grabbed data from API in state
      setWeatherData(response.data);

      // Reset error message if try passes
      setErrorMessage('');
    } catch (err) {
      console.error("An error occured while fetching the weather data:", err);
      
      // Set user error message
      setErrorMessage('City not found. Please enter a valid city name.');
      
      // Reset weather data if error occurs
      setWeatherData(null);
    }
  };

  return (
    <div>
      <h1>Weather Forecast</h1>
      <SearchBar onSearch={getWeatherData} />
      {weatherData && <WeatherDisplay weather={weatherData} />}
      {errorMessage && <div className='error-message'>{errorMessage}</div>}

      <div className='footer'>
        <p>Created by Adam Simcoe</p>
        <p>COMP 3123 - Lab Test 2</p>
      </div>
    </div>
  );
};

export default App;
