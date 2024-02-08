import me from '../../assets/ahmed.png';
import arrow from '../../assets/arrow.png';
import HomeContact from './homeContact';

export default function Home() {
  return (
    <main className=" w-5/6 grid mx-auto grid-cols-1 md:grid-cols-2  md:grid-rows-2 grid-rows-3 content-start sm:mt-16 h-4/5">
      <img
        id="me"
        src={me}
        className=" w-6/12  m-auto  rounded-full sm:border-4 border-2 border-lightcoffee"
      />
      <div className="m-auto md:ml-0 w-5/6 gap-3 flex flex-col">
        <h2 className="font-bold text-offwhite text-sm">HI THERE! I'M</h2>
        <h1 className="font-bold text-offwhite text-3xl md:text-4xl">
          <span className="text-lightcoffee">Ahmed</span> Mohamed
        </h1>
        <h1 className="font-bold text-offwhite  leading-6 text-lg">
          A <span className="text-lightcoffee">Front-End Web Developer</span>{' '}
          passionate about creating beautiful interactive web applications.
        </h1>
        <HomeContact />
      </div>
      <img src={arrow} className="m-auto w-5 md:col-span-2 animate-bounce " />
    </main>
  );
}
