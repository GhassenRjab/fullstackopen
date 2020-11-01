import React, { useState, useEffect } from 'react';
import Notification from './components/Notification';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import * as personsService from './services/persons';

const App = () => {
  const [search, setSearch] = useState('');
  const [persons, setPersons] = useState([]);
  const [notificationType, setNotificationType] = useState('');
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

  const showNotification = (type, message) => {
    setNotificationType(type);
    setNotificationMessage(message);
    setTimeout(() => {
      setNotificationType('');
      setNotificationMessage('');
    }, 2000);
  }

  const addPerson = (person) => {
    personsService
      .create(person)
      .then((response) => {
        setPersons(persons.concat(response.data));
        showNotification('info', `Added ${person.name}`);
      });
  }

  const updatePerson = (personId, person) => {
    personsService
      .update(personId, person)
      .then((response) => {
        setPersons(persons.map((person) => person.id === personId ? response.data : person));
        showNotification('info', `Updated ${person.name}`);
      })
      .catch(() => {
        showNotification('error', `Information of ${person.name} has already been removed from server`);
        setPersons(persons.filter((person) => person.id !== personId));
      });
  }

  const deletePerson = (personId) => {
    personsService
      .remove(personId)
      .then(() => {
        const deletedUser = persons.find((person) => person.id === personId);
        setPersons(persons.filter((person) => person.id !== personId));
        showNotification('info', `Deleted ${deletedUser.name}`);
      });
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification type={notificationType} message={notificationMessage} />
      <Filter search={search} updateSearch={onSearchChange} />
      <h3>Add a new</h3>
      <PersonForm persons={persons} addPerson={addPerson} updatePerson={updatePerson} />
      <h3>Numbers</h3>
      <Persons persons={personsToShow} deletePerson={deletePerson} />
    </div>
  )
}

export default App
