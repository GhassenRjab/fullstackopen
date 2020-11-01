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

  const updatePerson = (personId, person) => {
    personsService
      .update(personId, person)
      .then((response) => {
        setPersons(persons.map((person) => person.id === personId ? response.data : person));
      });
  }

  const deletePerson = (personId) => {
    personsService
      .remove(personId)
      .then((response) => {
        console.log(response.data);
        setPersons(persons.filter((person) => person.id !== personId));
      });
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} updateSearch={onSearchChange} />
      <h3>Add a new</h3>
      <PersonForm persons={persons} addPerson={addPerson} updatePerson={updatePerson} />
      <h3>Numbers</h3>
      <Persons persons={personsToShow} deletePerson={deletePerson} />
    </div>
  )
}

export default App
