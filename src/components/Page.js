import React from 'react';
import { useLocation } from 'react-router-dom';
import { getLatestPage, getAllRevisions } from '../api-calls/api';
import '../styles/output.css';

const Page = () => {
  const [page, setPage] = React.useState('');
  const [revisions, setRevisions] = React.useState('');
  let location = useLocation().pathname;
  console.log('this is the current location ', location);
  console.log('this is the revisions', revisions);
  React.useEffect(() => {
    const getData = async () => {
      try {
        const latestPageData = await getLatestPage(location);
        const revisionsData = await getAllRevisions(location);
        console.log(latestPageData.data);
        console.log(revisionsData);
        console.log('this is the revisions ', revisionsData.data.revisions);

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
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center ">
            <div className="flex ">
              <div className=" md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <h1
                    className="bg-gray-700 text-white px-6   rounded-md text-xl font-extralight"
                    aria-current="page"
                  >
                    {page.title}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <div className="flex flex-row  ">
          <div className="h-96 rounded-lg border-4 border-dashed border-gray-200">
            <h2>
              Hey, this is the latest version of this article written at{' '}
              {new Date(
                revisions[revisions.length - 1] * 1000
              ).toLocaleString()}{' '}
            </h2>
            <h3 className="font-bold"> The article reads </h3>
            <p>{page.data} </p>
          </div>
          <div className="h-96 rounded-lg border-4 border-dashed border-gray-200">
            <p>
              These are the date and time of the revisions for the following
              article
            </p>
            {!revisions ? (
              <h1>no pages</h1>
            ) : (
              revisions.map((revision) => (
                <div key={revision}>
                  <a href={`/page/${page.title}/${revision}`}>
                    {new Date(revision * 1000).toLocaleString()}
                  </a>
                </div>
              ))
            )}
            <div>
              <a href={`/page/new/${page.title}`}>Post new post here </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Page;
