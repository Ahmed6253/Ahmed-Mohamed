import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Header from './components/header/header';
import Home from './components/home/home';
import Loading from './components/loading/loading';
import Projects from './components/projects/projects';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          'https://portfolio-5f99d-default-rtdb.firebaseio.com/.json'
        );
        const fetchedData = await response.json();
        return setData(fetchedData);
      } catch (error) {
        setError(error.message);
      }
    }
    getData();
  }, []);
  return (
    <div className="app">
      <Loading />
      <Header data={data} />
      <Home />
      <About data={data} error={error} />
      <Projects data={data} error={error} />
      <Contact />
    </div>
  );
}

export default App;
