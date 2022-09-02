import React from 'react';
import { getLatestPage } from '../api-calls/api';

// import '../styles/output.css';
const Page = () => {
  const [page, setPage] = React.useState('passfort');
  React.useEffect(() => {
    const getData = async () => {
      try {
        const data = await getLatestPage(page);
        console.log(data.data.data);
        console.log(data.data.title);
        setPage(data.data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, [page]);

  return (
    <div>
      hey!!
      {/* <div>{data.data.title}</div>  */}
      {/* <div>{!page ? <div>no data </div> : page.data.data}</div>  */}
      {page.title}
      {page.data}
    </div>
  );
};
export default Page;
