import { useState } from "react";

export default function Main(){
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [celcius, setCelsius] = useState(true);
    const [error, setError] = useState(null);
    
    const WEATHERSTACK_KEY = "insert key here"

    const getWeather = async () => {
        try {
            const response = await fetch(`http://api.weatherstack.com/current?access_key=${WEATHERSTACK_KEY}&query=${city}`);
            const data = await response.json();
            if (data.error) {
                setError(data.error.info);
                setWeatherData(null);
            } else {
                setWeatherData(data);
                setError(null);
            }
        } catch (err) {
            setError("An error occurred while fetching weather data.");
            setWeatherData(null);
        }
    }

    const toggleUnit = () => {
        return celcius ? (weatherData.current.temperature * 9/5 + 32).toFixed(2) : weatherData.current.temperature;
    }

    return(
        <main>
            <h3>Search for a city..</h3>
            <input
                type="text"
                value = {city}
                onChange = {(e) => setCity(e.target.value)}
            />
            <button onClick = {getWeather}>Search</button>
            {error && <p className="error">{error}</p>}
            {weatherData && (
                <div className="weather-info">
                    <h2>{weatherData.location.name}, {weatherData.location.country}</h2>
                    <p>Temperature: {toggleUnit()}°{celcius ? "F" : "C"}</p>
                    <p>Condition: {weatherData.current.weather_descriptions[0]}</p>
                </div>
            )}
            <button onClick={() => setCelsius(!celcius)}>Toggle °C/°F</button>

        </main>
    )
}