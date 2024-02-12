export default function About(props) {
  const skills = props.data?.skills;
  const error = props.error;
  return (
    <section id="about" className="flex flex-col w-full  m-auto my-0 gap-5 ">
      <h1 className="text-lightcoffee text-2xl font-bold text-center">
        About Me
      </h1>
      <p className="text-offwhite leading-6 text-md md:w-1/2 md:m-auto mx-6">
        Hello, I'm Ahmed Mohamed, a Front-End Web Developer from Giza. After my
        graduation, I started my journey to become a Full-stack JavaScript
        Developer, but right now my expertise lies on the front end, primarily
        via React.JS for building beautiful, responsive, and scalable interfaces
        with accessibility. <br />
        <br />I graduated from the faculty of commerce at Cairo University in
        2022 which makes me interested in digital marketing and ecommerce, so
        I'm particularly passionate about building and designing software
        solutions for ecommerce companies.
      </p>
      <h1 className="text-lightcoffee text-xl font-bold md:w-1/2 md:m-auto mx-6">
        My skills:
      </h1>
      <div className="text-offwhite text-lg m-auto flex gap-3 flex-wrap md:m-auto mx-6 md:w-1/2">
        {skills ? (
          //success state
          skills.map((skill) => {
            return (
              <span key={skill} className="bg-lightolive rounded py-1 px-2">
                {skill}
              </span>
            );
          })
        ) : !skills && !error ? (
          //loading state
          <>
            <span className="bg-lightolive rounded py-1 w-1/4 px-2 animate-pulse">
              <br />
            </span>
            <span className="bg-lightolive rounded py-1 w-1/4 px-2 animate-pulse">
              <br />
            </span>
            <span className="bg-lightolive rounded py-1 w-1/4 px-2 animate-pulse">
              <br />
            </span>
            <span className="bg-lightolive rounded py-1 w-1/4 px-2 animate-pulse">
              <br />
            </span>
            <span className="bg-lightolive rounded py-1 w-1/4 px-2 animate-pulse">
              <br />
            </span>
          </>
        ) : (
          //error state
          <p className=" bg-error rounded py-1 px-2 ">
            Something Went Wrong With Fetching My Skills!
          </p>
        )}
      </div>
    </section>
  );
}
