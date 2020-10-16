import React from 'react';

const Country = ({ country }) => {
  console.log(country);
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
    </>
  )
};

export default Country;
