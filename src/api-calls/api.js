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

export const postNewRevision = async ( pathname, entry ) => {
  const options = {
    method: 'POST',
    url: `http://0.0.0.0:5003${pathname}`,
    data: entry,
  };
  console.log('this is the data for posting new revision', entry);
  console.log('this is the pathname for posting new revision', pathname);

  const { data } = await axios.request(options);
  
  return data;
};
