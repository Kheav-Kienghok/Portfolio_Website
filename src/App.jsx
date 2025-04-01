import { BrowserRouter } from 'react-router-dom';
import BackgroundContainer from './pages/components/BackgroundContainer';
import NavBar from "./pages/NavBar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Achievement from './pages/Achievement';

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
          <Achievement />
        </div>

    </BrowserRouter>

  );
}

export default App
