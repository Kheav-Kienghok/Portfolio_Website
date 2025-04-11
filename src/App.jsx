import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import BackgroundContainer from './pages/components/BackgroundContainer';
import LoadingScreen from './pages/components/LoadingScreen';
import NavBar from "./pages/NavBar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact"

function App() {

  const [isLoading, setIsLoading] = useState(true);
  
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

      {/* Loading Screen Overlay */}
      {isLoading && (
          <div className="fixed inset-0 z-50">
            <LoadingScreen onFinish={() => setIsLoading(false)} />
          </div>
      )}

    </BrowserRouter>

  );
}

export default App
