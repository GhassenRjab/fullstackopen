import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import * as personsService from './services/persons';

const App = () => {
  const [search, setSearch] = useState('');
  const [persons, setPersons] = useState([])

  useEffect(() => {
    personsService
      .getAll()
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
    personsService
      .create(person)
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
