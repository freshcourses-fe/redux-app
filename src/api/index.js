import axios from 'axios';

export const signUpUser = async (values) => {
  return axios.post('http://localhost:5000/api/users/auth/signup', values);
};
