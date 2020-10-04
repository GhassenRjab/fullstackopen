import React from 'react';

const Total = ({ parts }) => {
  const total = parts.reduce((previousValue, { exercises }) => previousValue + exercises, 0);
  return <p><b>total of {total} exercices</b></p>;
}

export default Total;
