export default function ProjectCard(props) {
  return (
    <section className="text-offwhite flex w-full md:w-2/3 m-auto mb-10 flex-col rounded-3xl bg-lightolive">
      {props.data && (
        <>
          <img
            src={props.data.img}
            className="md:w-11/12 w-full self-center -translate-y-10 border-8 border-drakolive rounded-3xl bg-drakolive"
          />
          <div className="flex flex-col gap-5 w-2/3 mx-auto py-5 ">
            <h1 className="text-lightcoffee font-bold text-lg sm:text-2xl">
              {props.data.projectName}
            </h1>
            <p className="text-sm w-full">{props.data.description}</p>
            <p className="text-md text-lightcoffee font-bold">Made With:</p>
            <ul className="flex flex-wrap gap-1 text-sm">
              {props.data.tools.map((tool) => (
                <li
                  className="bg-drakolive rounded py-0.5 text-center px-1"
                  key={tool}
                >
                  {tool}
                </li>
              ))}
            </ul>
            <a
              className=" mt-5 p-1.5 self-center text-sm rounded-lg border-2 border-offwhite bg-drakolive font-bold hover:scale-105 transition"
              href={props.data.view}
              target="_blank"
            >
              View Live
            </a>
          </div>
        </>
      )}
    </section>
  );
}
