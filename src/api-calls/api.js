import axios from 'axios';

export const getAllPages = () => {
  return axios.get('http://0.0.0.0:5003/pages');
};
export const getLatestPage = (page) => {
  return axios.get(`http://0.0.0.0:5003/page/${page}/latest`);
};