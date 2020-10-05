import React, { useState } from 'react'

const App = () => {
  const [search, setSearch] = useState('');
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const personsToShow = search
    ? persons.filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()))
    : persons;

  const onSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const onNameChange = (event) => {
    setNewName(event.target.value);
  };

  const onNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat({ name: newName, number: newNumber }));
      setNewName('');
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={search} onChange={onSearchChange} />
      </div>
      <h2>add a new</h2>
      <form onSubmit={onFormSubmit}>
        <div>
          name: <input value={newName} onChange={onNameChange} />
        </div>
        <div>number: <input value={newNumber} onChange={onNumberChange} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsToShow && personsToShow.map(({ name, number }) => <li key={name}>{name} {number}</li>)}
      </ul>
    </div>
  )
}

export default App
