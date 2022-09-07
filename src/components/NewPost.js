import React from 'react';
import { postNewRevision } from '../api-calls/api';
import '../styles/output.css';
import { useLocation, useNavigate } from 'react-router-dom';

const NewPost = () => {
  const [entry, setEntry] = React.useState({
    page: '',
  });
  const navigate = useNavigate();
  let location = useLocation();
  let pathname = location.pathname.replace('/new', '');
  console.log(pathname);
  function handleChange(event) {
    setEntry({ ...entry, [event.target.name]: event.target.value });
  }
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = await postNewRevision(pathname, entry);
      console.log('this the data being sent to the  backend', data);
      navigate(`${pathname}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>{`This is to make a new revision to the following article: ${location.pathname.replace(
        '/page/new/',
        ''
      )} `}</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          placeholder="Enter your new revision here..."
          type="text"
          name="page"
          id="page"
          onChange={handleChange}
          value={entry.page}
          autoComplete="off"
          required
        />
        <button type="submit">Post Revision</button>
      </form>
    </div>
  );
};

export default NewPost;
