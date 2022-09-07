import React from 'react';
import { getAllPages, postNewRevision } from '../api-calls/api';
import { useNavigate } from 'react-router-dom';
import '../styles/output.css';
const Homepage = () => {
  const [pages, setPages] = React.useState(null);
  const [entry, setEntry] = React.useState({
    title: '',
    page: '',
  });
  const navigate = useNavigate();
  let sanitizedTitle = entry.title.replace(' ', '').toLowerCase();
  let pathname = '/page/'.concat(sanitizedTitle);
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
                      Welcome to theWiki
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl  py-1 px-2 font-bold tracking-tight text-gray-900">
              Documents
            </h1>
            <p className="text-l  py-1 px-2 font-light tracking-tight text-gray-900">
              Click the document you'd like to read
            </p>
          </div>
        </header>
        <main>
          <div className="flex flex-row  ">
            <div className="basis-1/4  mx-auto   sm:px-6 lg:px-8">
              <div className="px-4 py-1 sm:px-0">
                <div className="h-96 rounded-lg border-4 border-dashed border-gray-200">
                  <div>
                    {!pages ? (
                      <h1>no pages</h1>
                    ) : (
                      pages.titles.map((page) => (
                        <div
                          key={page}
                          className=" md:ml-10 md:block md:space-x-8 md:pr-4"
                        >
                          <a
                            href={`page/${page}`}
                            className="font-medium text-gray-500 uppercase py-1 w-fit hover:text-gray-900"
                          >
                            {page}
                          </a>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-3/4  mx-auto   sm:px-6 lg:px-8">
              <div className="px-4 py-1 sm:px-0">
                <div className="h-96 rounded-lg border-4 border-dashed border-gray-200">
                  <h2 className="font-extrabold  text-l text-gray-900 uppercase m-3">
                    Post a new article
                  </h2>
                  <form action="" onSubmit={handleSubmit}>
                    <input
                      type="text"
                      maxLength="50"
                      placeholder="Enter title here"
                      className="py-3 px-3  mr-4 my-1 w-full border-2 border-slate-400"
                      name="title"
                      id="title"
                      onChange={handleChange}
                      value={entry.title}
                      autoComplete="off"
                      required
                    />
                    <input
                      type="text"
                      maxLength="500"
                      placeholder="Enter text here"
                      className="py-3  h-32   w-full border-2 border-slate-400"
                      name="page"
                      id="page"
                      onChange={handleChange}
                      value={entry.page}
                      autoComplete="off"
                      required
                      // unique="true"
                    />
                    <button className="border mt-5 ml-2 p-3 bg-gray-700 text-white rounded-lg">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default Homepage;
