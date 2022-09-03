import React from 'react';
import { getAllPages } from '../api-calls/api';
import { Link } from 'react-router-dom';
import '../styles/output.css';
const Homepage = () => {
  const [pages, setPages] = React.useState(null);
  React.useEffect(() => {
    const getData = async () => {
      try {
        const data = await getAllPages();
        console.log(data.data);
        setPages(data.data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <div>hey world!!!</div>

      <div>
        {!pages ? (
          <h1>no pages</h1>
        ) : (
          pages.titles.map((page) => (
            <div key={page}>
              <a href={`page/${page}`}>{page}</a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default Homepage;
