import './styles/App.css';
import SideBar from './sections/SideBar/SideBar';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Facts from './sections/Facts/Facts';
import Skills from './sections/Skills/Skills';
import Resume from './sections/Resume/Resume';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact';

function App() {
  return (
    <div className="App">
      <SideBar />
      <Hero></Hero>
      <main id='main'>
        <About></About>
        {/* <Facts></Facts> */}
        <Skills></Skills>
        <Resume></Resume>
        <Projects></Projects>
        <Contact></Contact>
      </main> 
    </div>
  );
}

export default App;
