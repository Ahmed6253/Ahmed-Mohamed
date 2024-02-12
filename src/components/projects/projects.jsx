import ProjectCard from './projectCard';

export default function Projects({ data, error }) {
  const projects = data?.projects;
  return (
    <div id="projects" className="flex flex-col m-auto my-52 gap-16">
      <h1 className="text-lightcoffee text-2xl font-bold  text-center">
        My Projects
      </h1>
      {projects ? (
        projects.map((project) => {
          return <ProjectCard key={project.projectName} data={project} />;
        })
      ) : !projects && !error ? (
        <>
          <span className="bg-lightolive rounded py-1 w-1/2 m-auto h-40 animate-pulse">
            <br />
          </span>
          <span className="bg-lightolive rounded py-1 w-1/2 m-auto h-40 animate-pulse">
            <br />
          </span>
        </>
      ) : (
        <p className=" bg-error rounded py-1 text-offwhite text-lg m-auto px-2">
          Something Went Wrong With Fetching My Projects!
        </p>
      )}
    </div>
  );
}
