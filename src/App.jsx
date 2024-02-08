import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Header from './components/header/header';
import Home from './components/home/home';
import Projects from './components/projects/projects';

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
