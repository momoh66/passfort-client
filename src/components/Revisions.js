import React from 'react';
import { getSpecificRevision } from '../api-calls/api';
import { useLocation } from 'react-router-dom';
import '../styles/output.css';
import ReactMarkdown from 'react-markdown';

const Revisions = () => {
  const [page, setPage] = React.useState('');
  const markdown = page.data;
  console.log('this page is the data', markdown);
  let location = useLocation().pathname;
  console.log('this is the pathname for the specific revisions', location);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const specificRevisionsData = await getSpecificRevision(location);
        console.log(
          'this is the data from specificRevisions',
          specificRevisionsData
        );
        setPage(specificRevisionsData.data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, [location]);
  // console.log(page.data)
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
                    Revision
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <h1 className="text-3xl  py-1 px-2 font-bold tracking-tight text-gray-900">
        {page.title}
      </h1>
      <p>
        <ReactMarkdown>{page.data}</ReactMarkdown>
      </p>
    </div>
  );
};
export default Revisions;
