import React, { useState, useEffect } from 'react';
import Notification from './components/Notification';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import * as personsService from './services/persons';

const App = () => {
  const [search, setSearch] = useState('');
  const [persons, setPersons] = useState([]);
  const [notificationMessage, setNotificationMessage] = useState('');

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

  const showNotification = (message) => {
    setNotificationMessage(message);
    setTimeout(() => {
      setNotificationMessage('');
    }, 2000);
  }

  const addPerson = (person) => {
    personsService
      .create(person)
      .then((response) => {
        setPersons(persons.concat(response.data));
        showNotification(`Added ${person.name}`);
      });
  }

  const updatePerson = (personId, person) => {
    personsService
      .update(personId, person)
      .then((response) => {
        setPersons(persons.map((person) => person.id === personId ? response.data : person));
        showNotification(`Updated ${person.name}`);
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
      <Notification message={notificationMessage} />
      <Filter search={search} updateSearch={onSearchChange} />
      <h3>Add a new</h3>
      <PersonForm persons={persons} addPerson={addPerson} updatePerson={updatePerson} />
      <h3>Numbers</h3>
      <Persons persons={personsToShow} deletePerson={deletePerson} />
    </div>
  )
}

export default App
