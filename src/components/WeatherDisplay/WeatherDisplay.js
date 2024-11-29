// Created by Adam Simcoe - 101442161
// Last Updated - November 28th, 2024

import React from "react";

// Component to display weather data 
const WeatherDisplay = ({weather}) => {
    
    // Extract weather properties 
    const {
        name, 
        sys: {country, sunrise, sunset},
        coord: {lon, lat},
        main: {temp, feels_like, temp_min, temp_max, pressure},
        visibility,
        wind: {speed: windspeed},
        clouds: {all: cloudiness},
        timezone,
        weather: weatherInfo,
    } = weather;

    // Weather Icon URL 
    const iconUrl = `https://openweathermap.org/img/wn/${weatherInfo[0].icon}@2x.png`;

    // Format timestamp
    const formatTime = (timestamp) => {
        return new Date(timestamp).toLocaleTimeString();
    }

    // Get current date in format (Day of Week, Month, Date)
    const getCurrentDate = () => {
        const today = new Date();
        const options = {weekday: 'short', month: 'short', day: 'numeric'};

        return today.toLocaleDateString('en-US', options);
    }
    
    return (
        <div className="weather-container">
            <div className="weather-area-information">
                <h2>Current Weather For: {name}, {country}</h2>
                <p className="date-time">{getCurrentDate()}</p>
                <p className="date-time">{new Date().toLocaleTimeString()}</p>
                <p>Coordinates: Lon {lon}, Lat {lat}</p>
                {/* 3600 seconds in 1 hour */}
                <p>Timezone: UTC {timezone / 3600} hours.</p>
                
                <div className="weather-icon">
                <img src={iconUrl} alt={weatherInfo[0].description} />
                <p>Currently: {weatherInfo[0].description}</p>
            </div>
            </div>
            <div className="weather-details">
                <div className="weather-temperature">
                    <h3>Temperature Details</h3>
                    <p>Current: {temp}°C</p>
                    <p>Feels Like: {feels_like}°C</p>
                    <p>Min: {temp_min}°C</p>
                    <p>Max: {temp_max}°C</p>
                    {/* 1000 meters in 1 km */} 
                    <p>Visibility: {visibility / 1000} km</p>
                </div>

                <div className="weather-conditions">
                    <h3>Other Weather Information:</h3>
                    <p>Wind Speed: {windspeed} m/s</p>
                    <p>Pressure: {pressure} hPa</p>
                    <p>Cloud Coverage: {cloudiness}%</p>
                    <p>Sunrise: {formatTime(sunrise)}</p>
                    <p>Sunset: {formatTime(sunset)}</p>
                </div>
            </div>
        </div>
    );
};

export default WeatherDisplay;