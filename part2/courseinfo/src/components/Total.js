import React from 'react';

const Total = ({parts}) => {
  return <p><b>total of {parts[0].exercises + parts[1].exercises + parts[2].exercises} exercices</b></p>;
}

export default Total;
