import axios from 'axios';
import { API_BASE_URL } from './config';
import { ITask } from '@utility/interfaces';

export const fetchTasks = async () => {
  const { data } = await axios.get(`${API_BASE_URL}/tasks`);
  return data;
};

export const addTask = async (task: ITask) => {
  const { data } = await axios.post(`${API_BASE_URL}/tasks`, task);
  return data;
};

export const updateTask = async (task: ITask) => {
  const { data } = await axios.patch(`${API_BASE_URL}/tasks/${task._id}`, {
    content: task.content,
    isCompleted: task.isCompleted,
  });
  return data;
};

export const deleteTask = async (taskId: string) => {
  await axios.delete(`${API_BASE_URL}/tasks/${taskId}`);
};
