import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import Countries from './components/Countries';
import Country from './components/Country';

const App = () => {
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (search) {
      axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(({ data }) => {
          setCountries(data.filter(({ name }) => name.match(new RegExp(search, 'i'))));
        });
    }
  }, [search]);

  const onSearchChange = (search) => {
    setSearch(search);
  };

  return (
    <div>
      <Filter search={search} updateSearch={onSearchChange} />
      {countries.length > 10
        ? <p>Too many matches, specify another filter</p>
        : countries.length === 1
          ? <Country country={countries[0]} />
          : <Countries countries={countries} />}
    </div>
  )
}

export default App
