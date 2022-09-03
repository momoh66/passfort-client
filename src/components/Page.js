import React from 'react';
import {useLocation} from 'react-router-dom'
import { getLatestPage, getAllRevisions } from '../api-calls/api';

// import '../styles/output.css';
const Page = () => {
  
  const [page, setPage] = React.useState('');
  const[revisions,setRevisions] = React.useState('')
  let location = useLocation().pathname;
  console.log('this is the current location ',location)
  React.useEffect(() => {
    const getData = async () => {
      try {
        const latestPageData = await getLatestPage(location);
        const revisionsData = await getAllRevisions(location);
        console.log(latestPageData.data);
        console.log(revisionsData);
        console.log('this is the revisions ', revisionsData.data.revisions)
        
        setPage(latestPageData.data);
        setRevisions(revisionsData.data.revisions);
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
      <div>
        <p>These are the revisions for these articles ....</p>
        {!revisions ? (
          <h1>no pages</h1>
        ) : (
          revisions.map((revision) => (
            <div key={revision}>
              <a href={`/page/${page.title}/${revision}`}>{revision}</a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default Page;
