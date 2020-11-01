import React, { useState } from 'react'

const PersonForm = ({ persons, addPerson, updatePerson }) => {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const onNameChange = (event) => {
    setNewName(event.target.value);
  };

  const onNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const clearForm = () => {
    setNewName('');
    setNewNumber('');
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    const alreadyAddedPerson = persons.find(person => person.name === newName);
    if (alreadyAddedPerson) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        updatePerson(alreadyAddedPerson.id, { name: newName, number: newNumber });
        clearForm();
      }
    } else {
      addPerson({ name: newName, number: newNumber });
      clearForm();
    }
  }

  return (
    <form onSubmit={onFormSubmit}>
      <div>
        name: <input value={newName} onChange={onNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={onNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm;
