import Logo from '../logo';

import BurgerIcon from './burgerIcon';
import HeaderLinkes from './headerLinks';
export default function Header({ data }) {
  //reusable classes
  const linksStyle =
    'cursor-pointer hover:scale-105 transition-transform  text-lightcoffee font-bold text-xl m-0';

  const containerStyle = 'md:flex justify-evenly w-3/5 hidden';

  const logoStyle = 'w-16 md:w-auto md:h-auto h-16 md:m-auto mx-5';

  return (
    <>
      <header className="flex justify-between md:ml-10 mr-auto pt-6 items-center">
        <div>
          <Logo style={logoStyle} />
        </div>
        <BurgerIcon data={data} />
        <HeaderLinkes
          data={data}
          containerStyle={containerStyle}
          linksStyle={linksStyle}
        />
      </header>
    </>
  );
}
