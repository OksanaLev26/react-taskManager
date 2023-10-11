import axios from "axios";
// const baseURL = '';
const baseURL = "http://localhost:3001";

// Show all
export const  getTasks = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
  
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
export const createTask = (task) => {
  return axios.post(baseURL, task);
};

// Delete
export const deleteTask = (id) => {
  return axios.delete(`${baseURL}/${id}`);
};
