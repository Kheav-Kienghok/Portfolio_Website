import NavBar from "./pages/NavBar";
import Hero from "./pages/Hero";

function App() {

  return (

    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: 'url(/images/Background.jpg)' }}
    >
      <NavBar />
      <Hero />
    </div>

  )
}

export default App
