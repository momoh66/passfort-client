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
    <div className="min-h-full">
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center ">
            <div className="flex ">
              <div className=" md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <h1
                    className="bg-gray-700 text-white px-6  rounded-md text-xl font-extralight"
                    aria-current="page"
                  >
                    {`This is to make a new revision to the following article: ${location.pathname.replace(
                      '/page/new/',
                      ''
                    )} `}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

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
        <button
          className="border mt-5 ml-2 p-3 bg-gray-700 text-white rounded-lg"
          type="submit"
        >
          Post Revision
        </button>
      </form>
    </div>
  );
};

export default NewPost;
