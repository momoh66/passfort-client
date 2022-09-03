import axios from 'axios';

export const getAllPages = () => {
  return axios.get('http://0.0.0.0:5003/pages');
};
export const getLatestPage = (page_id) => {

  return axios.get(`http://0.0.0.0:5003${page_id}/latest`);
};
// export const getLatestPage = async (page) => {
//   const options = {
//     method: 'GET',
//     url: `http://0.0.0.0:5003/page/${page}/latest`,
//   };
//   const { data } = await axios.request(options);
//   console.log('data', data);
//   return data;
// };