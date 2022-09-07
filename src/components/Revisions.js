import React from 'react';
import { getSpecificRevision} from '../api-calls/api';
import { useLocation } from 'react-router-dom';
import '../styles/output.css';
const Revisions = () => {

  const [page, setPage] = React.useState('');
let location = useLocation().pathname
  console.log('this is the pathname for the specific revisions',location);

React.useEffect(() => {
  const getData = async () => {
    try {
      const specificRevisionsData = await getSpecificRevision(location);
      console.log('this is the data from specificRevisions', specificRevisionsData);
       setPage(specificRevisionsData.data)

  
    } catch (err) {
      console.error(err);
    }
  };
  getData();
}, [location]);
// console.log(page.data)
  return (
    <div>
      <div>hey world!!</div>
      <div>{page.data}</div>
      <div>{page.title}</div>
    </div>
  );
};
export default Revisions;
