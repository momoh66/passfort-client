import React from 'react';
import {useLocation} from 'react-router-dom'
import { getLatestPage } from '../api-calls/api';

// import '../styles/output.css';
const Page = () => {
  
  const [page, setPage] = React.useState('');
  let location = useLocation().pathname;
  console.log('this is the current location ',location)
  React.useEffect(() => {
    const getData = async () => {
      try {
        const data = await getLatestPage(location);
        console.log(data.data);
        
        setPage(data.data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, [location]);

  return (
    <div>
      hey!!
      
      <h1>this article is called {page.title} </h1>
      <p> this is the article {page.data} </p>
    </div>
  );
};
export default Page;
