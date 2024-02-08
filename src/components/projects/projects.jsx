import { useEffect } from 'react';
import { useState } from 'react';
import ProjectCard from './projectCard';

export default function Projects() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          'https://portfolio-5f99d-default-rtdb.firebaseio.com/.json'
        );
        const fetchedData = await response.json();
        setData(fetchedData.projects);
      } catch (e) {
        setError(e);
      }
    }
    getData();
  }, []);

  return (
    <div id="projects" className="flex flex-col m-auto my-52 gap-16">
      <h1 className="text-lightcoffee text-2xl font-bold  text-center">
        My Projects
      </h1>
      {data ? (
        data.map((project) => {
          return <ProjectCard key={project.projectName} data={project} />;
        })
      ) : !data && !error ? (
        <>
          <span className="bg-lightolive rounded py-1 w-1/2 m-auto animate-pulse">
            <br />
          </span>
          <span className="bg-lightolive rounded py-1 w-1/2 m-auto animate-pulse">
            <br />
          </span>
        </>
      ) : (
        <p className=" bg-error rounded py-1  px-2 animate-pulse">
          Something Went Wrong With Fetching My Projects!
        </p>
      )}
    </div>
  );
}
