import React from 'react';

const Countries = ({ countries, onShowCountryClicked }) =>
  countries.map((country) => (
    <div key={country.numericCode}>
      <span>{country.name}</span>
      <button onClick={() => { onShowCountryClicked(country.numericCode) }}>show</button>
    </div>)
  );

export default Countries;
