import logo from '../../assets/LOGO.svg';

import BurgerIcon from './burgerIcon';
import HeaderLinkes from './headerLinks';
export default function Header() {
  //reusable classes
  const linksStyle =
    'cursor-pointer hover:scale-105 transition-transform  text-lightcoffee font-bold text-xl m-0';

  const containerStyle = 'md:flex justify-evenly w-3/5 hidden';

  return (
    <>
      <header className="flex justify-between md:ml-10 mr-auto mt-6 items-center">
        <div>
          <img src={logo} className="md:w-auto w-16 md:m-auto mx-5" />
        </div>
        <BurgerIcon />
        <HeaderLinkes containerStyle={containerStyle} linksStyle={linksStyle} />
      </header>
    </>
  );
}
