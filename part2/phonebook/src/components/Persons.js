import React from 'react';
import Person from './Person';

const Persons = ({ persons }) => (
  <ul>
    {persons && persons.map((person) => <Person key={person.name} person={person} />)}
  </ul>
 );

export default Persons;
