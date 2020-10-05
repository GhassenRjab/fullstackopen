import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('');

  const onNameChange = (event) => {
    setNewName(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setPersons(persons.concat({ name: newName }));
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={onFormSubmit}>
        <div>
          name: <input value={newName} onChange={onNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons && persons.map(({ name }) => <li key={name}>{name}</li>)}
      </ul>
    </div>
  )
}

export default App
