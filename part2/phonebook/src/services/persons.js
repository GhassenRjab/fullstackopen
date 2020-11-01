import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

export const getAll = () => {
  return axios.get(baseUrl);
};

export const create = (newPerson) => {
  return axios.post(baseUrl, newPerson);
};

export const update = (personId, person) => {
  return axios.put(`${baseUrl}/${personId}`, person);
};

export const remove = (personId) => {
  return axios.delete(`${baseUrl}/${personId}`);
};
