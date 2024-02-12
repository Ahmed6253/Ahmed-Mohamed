import { motion } from 'framer-motion';

export default function HeaderLinkes(props) {
  const cv = props.data?.cv;
  return (
    <motion.div
      animate={{ y: props.animate ? -40 : 0 }}
      initial={{ y: props.animate ? -20 : 0 }}
      className={props.containerStyle}
    >
      <a href="#about" className={props.linksStyle}>
        About
      </a>
      <a href="#projects" className={props.linksStyle}>
        Projects
      </a>
      <a href="#contact" className={props.linksStyle}>
        Contact
      </a>
      <a href={cv} target="_balnk" className={props.linksStyle}>
        Resume
      </a>
    </motion.div>
  );
}
