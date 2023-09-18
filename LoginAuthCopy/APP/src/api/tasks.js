import axios from './axios.js';

// const URL = 'http://localhost:5000/api'

export const getTasksRequest = () => axios.get(`/tasks`)
export const getTaskRequest = (id) => axios.get(`/tasks/${id}`)
export const createTasksRequest = (task) => axios.post(`/task`, task)
export const updateTasksRequest = (task) => axios.put(`/tasks/${task._id}`, task)
export const deleteTasksRequest = (id) => axios.delete(`/task/${id}`)