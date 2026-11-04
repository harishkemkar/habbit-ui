import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE_URL;

export const getHabit = (userId, habitId) =>
  axios.get(`${API_BASE}/habits/${userId}/${habitId}`);

export const createHabit = (habit) =>
  axios.post(`${API_BASE}/habits`, habit);

export const updateHabit = (userId, habitId, habit) =>
  axios.put(`${API_BASE}/habits/${userId}/${habitId}`, habit);

export const deleteHabit = (userId, habitId) =>
  axios.delete(`${API_BASE}/habits/${userId}/${habitId}`);
