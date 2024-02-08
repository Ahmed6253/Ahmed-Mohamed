import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function HeaderLinkes(props) {
  //resume link fetching
  const [data, setData] = useState(null);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        'https://portfolio-5f99d-default-rtdb.firebaseio.com/.json'
      );
      const fetchedData = await response.json();
      setData(fetchedData.cv);
    }
    getData();
  }, []);

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
      <a href={data} target="_balnk" className={props.linksStyle}>
        Resume
      </a>
    </motion.div>
  );
}
