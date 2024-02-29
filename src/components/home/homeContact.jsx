import linkedin from '../../assets/in.png';
import github from '../../assets/git.png';
import email from '../../assets/email.png';
import { useScroll, motion, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

export default function HomeContact() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    latest >= 350 ? setScrolled(true) : setScrolled(false);
  });
  const emailAnimation = {
    top: '90%',
    right: '4%',
    position: 'fixed',
    opacity: 0.8,
  };

  return (
    <div className="flex w-full gap-10  items-center">
      <motion.a
        animate={scrolled ? emailAnimation : {}}
        initial={{ top: '10%', right: '40%' }}
        transition={{ type: 'spring', duration: 1.4 }}
        exit
        href="mailto:abdelmonaem535@gmail.com"
        className="bg-lightolive text-offwhite p-3 border-drakolive border-4 font-bold lg:text-md text-sm z-50 text-center max-w-48 rounded-xl hover:scale-105 transition"
      >
        {scrolled === false ? (
          <p>LET'S TALK</p>
        ) : (
          <img src={email} className="w-8" />
        )}
      </motion.a>
      <a
        href="https://www.linkedin.com/in/ahmed-abdelmonaem-097765246/"
        target="_blank"
      >
        <img src={linkedin} className="w-8 hover:scale-105 transition" />
      </a>
      <a href="https://github.com/Ahmed6253" target="_blank">
        <img src={github} className="w-8  hover:scale-105 transition" />
      </a>
    </div>
  );
}
