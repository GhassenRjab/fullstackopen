import React, { useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [search, setSearch] = useState('');
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  

  const personsToShow = search
    ? persons.filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()))
    : persons;

  const onSearchChange = (search) => {
    setSearch(search);
  };

  const addPerson = (person) => {
    setPersons(persons.concat(person));
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
