import React from 'react';

const Person = ({ person: { id, name, number }, deletePerson }) => {

  const handleDeleteClick = () => {
    if (window.confirm(`Delete ${name}`)) {
      deletePerson(id);
    }
  }

  return (
    <li>
      <span>{name} {number}</span>
      <button onClick={handleDeleteClick}>delete</button>
    </li>
  );
};

export default Person;
