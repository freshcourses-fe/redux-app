import axios from 'axios';

export const signUpUser = async (values) => {
  return axios.post('http://localhost:5000/api/users/auth/signup', values);
};

export const loginUser = async (values) =>
  axios.post('http://localhost:5000/api/users/auth/login', values);

export const workingUser = (options) =>
  axios.get('http://localhost:5000/api/users');
