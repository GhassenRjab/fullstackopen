import React, { useState, useEffect } from 'react';
import axios from 'axios';
import querystring from 'querystring';

const weatherReducer = ({ current: { temperature, weather_icons: [icon], wind_speed: windSpeed, wind_dir: windDirection } }) => ({
  temperature,
  icon,
  windSpeed,
  windDirection,
});

const Country = ({ country }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const queryParams = querystring.stringify({
      access_key: process.env.REACT_APP_WEATHER_API_KEY,
      query: country.capital,
    });
    axios
      .get(`http://api.weatherstack.com/current?${queryParams}`)
      .then(({ data }) => {
        setWeather(weatherReducer(data));
      });
  }, [country.capital]);

  return (
    <>
      <h2>{country.name}</h2>
      <p>
        capital {country.capital}
        <br />
            population {country.population}
      </p>
      <h2>Spoken languages</h2>
      <ul>
        {country.languages.map((language) => <li key={language.iso639_1}>{language.name}</li>)}
      </ul>
      <img src={country.flag} alt={country.name} style={{ width: '180px' }} />
      {weather && (
        <>
          <h2>Spoken languages</h2>
          <b>temperature</b>: {weather.temperature} Celcius
          <img src={weather.icon} alt='weather' style={{ display: 'block', width: '60px' }} />
          <b>wind</b>: {weather.windSpeed} mph direction {weather.windDirection}
        </>
      )}
    </>
  )
};

export default Country;
