import { useState } from 'react';
import HeaderLinkes from './headerLinks';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

export default function BurgerIcon() {
  const [active, setActive] = useState(false);
  const handelClick = () => {
    setActive((curent) => !curent);
  };
  //Links styles
  const animate = true;
  const containerStyle = 'flex flex-col justify-evenly absolute h-svh m-auto';
  const linksStyle =
    'cursor-pointer rotate-90 text-lightcoffee font-bold text-sm';

  return (
    <div
      onClick={handelClick}
      className="md:hidden gap-1.5 flex flex-col mx-7 mb-3 items-center"
    >
      <motion.span
        animate={{ rotate: active ? -45 : 0, width: active ? '28px' : '8px' }}
        className="w-2 h-1 bg-lightcoffee rounded"
      ></motion.span>
      <motion.span
        animate={{ display: active ? 'none' : 'block' }}
        className="w-5 h-1 bg-lightcoffee rounded"
      ></motion.span>
      <motion.span
        animate={{ rotate: active ? 45 : 0, y: active ? -9.5 : 0 }}
        className="w-7 h-1 bg-lightcoffee rounded"
      ></motion.span>
      <AnimatePresence>
        {active && (
          <HeaderLinkes
            animate={animate}
            containerStyle={containerStyle}
            linksStyle={linksStyle}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
