import { baseURL } from "../constant/baseUrl";
import axios from 'axios'

export const signIn = async (credentials) => {
  try {
    const response = await axios.post(`${baseURL}/signin`, credentials)
    return response.data
  } catch (error) {
    return error
  }
};


export const signUp = async (userData) => {
  const response = await fetch(`${baseURL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  return await response.json();
};
