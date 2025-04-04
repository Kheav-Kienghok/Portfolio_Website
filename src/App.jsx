import { BrowserRouter } from 'react-router-dom';
import BackgroundContainer from './pages/components/BackgroundContainer';
import NavBar from "./pages/NavBar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact"

function App() {
  
  return (

    <BrowserRouter>
      <BackgroundContainer/>
      <NavBar />

      <div id="home">
        <Home />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="contact">
        <Contact />
      </div>

    </BrowserRouter>

  );
}

export default App
