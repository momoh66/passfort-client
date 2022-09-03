import axios from 'axios';

export const getAllPages = () => {
  return axios.get('http://0.0.0.0:5003/pages');
};

export const getLatestPage = (page_id) => {
  return axios.get(`http://0.0.0.0:5003${page_id}/latest`);
};

export const getAllRevisions = (pageName) => {
  // console.log('this is the location',pageName);
  return axios.get(`http://0.0.0.0:5003${pageName}`);
};

export const getSpecificRevision = (pageName) => {
  console.log('this is the pathname', pageName);
  return axios.get(`http://0.0.0.0:5003${pageName}`);
};
