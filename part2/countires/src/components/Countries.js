import React from 'react';

const Countries = ({ countries }) =>
  countries.map((country) => <div key={country.numericCode}>{country.name}</div>);

export default Countries;
