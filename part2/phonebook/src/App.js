import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const personsURL = 'http://localhost:3001/persons';

const App = () => {
  const [search, setSearch] = useState('');
  const [persons, setPersons] = useState([])

  useEffect(() => {
    axios
      .get(personsURL)
      .then((response) => {
        setPersons(response.data);
      });
  }, []);

  const personsToShow = search
    ? persons.filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()))
    : persons;

  const onSearchChange = (search) => {
    setSearch(search);
  };

  const addPerson = (person) => {
    axios
      .post(personsURL, person)
      .then((response) => {
        setPersons(persons.concat(response.data));
      });
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} updateSearch={onSearchChange} />
      <h3>Add a new</h3>
      <PersonForm persons={persons} addPerson={addPerson} />
      <h3>Numbers</h3>
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App
