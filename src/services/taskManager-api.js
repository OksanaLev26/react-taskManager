import axios from "axios";
// const baseURL = '';
const baseURL = "http://localhost:3001";

// Show all
export const getTasks = () => {
  return axios.get(baseURL);
};

// Show one
export const getTask = (id) => {
  return axios.get(`${baseURL}/${id}`);
};

// Edit
export const editTask = (id, updatedTask) => {
  return axios.put(`${baseURL}/${id}`, updatedTask);
};

// Create
export const createTask = (todo) => {
  return axios.post(baseURL, todo);
};

// Delete
export const deleteTask = (id) => {
  return axios.delete(`${baseURL}/${id}`);
};
