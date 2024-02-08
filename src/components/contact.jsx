export default function Contact() {
  return (
    <section id="contact" className=" rounded-xl py-5 bg-lightolive ">
      <h1 className="text-center text-3xl font-bold text-lightcoffee mb-5">
        LET'S CONNECT
      </h1>
      <hr className="text-lightcoffee border-2 w-11/12 text-center m-auto rounded" />
      <div className="flex gap-10 my-10 flex-col md:flex-row">
        <div className="flex flex-col w-fit mx-5">
          <h2 className="text-lightcoffee font-bold text-lg mb-2">
            FIND ME HERE
          </h2>
          <a
            className="font-bold text-offwhite"
            href="https://www.linkedin.com/in/ahmed-abdelmonaem-097765246/"
          >
            LINKEDIN
          </a>
          <a
            className="font-bold text-offwhite"
            href="https://github.com/Ahmed6253"
          >
            GITHUB
          </a>
        </div>
        <div className="flex flex-col w-11/12 mx-5 md:w-1/2">
          <h2 className="text-lightcoffee font-bold text-lg mb-2">REACH OUT</h2>
          <p className="text-offwhite">
            Even if I'm not open to work, I'm always open to a virtual coffee.
            So, feel free to get in touch via{' '}
            <a
              className="font-bold text-lightcoffee"
              href="mailto:abdelmonaem535@gmail.com"
            >
              abdelmonaem535@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
