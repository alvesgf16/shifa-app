import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.2.2:3001', // Use 10.0.2.2 to refer to localhost from the Android emulator
});

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await api.post('/login', { email, password });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const registerUser = async (email: string, password: string) => {
  try {
    const response = await api.post('/user', { email, password,  });
    console.log('response', response);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

