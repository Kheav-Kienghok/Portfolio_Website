import NavBar from "./pages/NavBar";
import Hero from "./pages/Hero";

function App() {

  return (

    <div
      className="bg-cover bg-center min-h-screen sm:h-auto"
      style={{ backgroundImage: 'url(/images/Background.jpg)' }}
    >
      <div className="overflow-hidden">
        <NavBar />
        <Hero />
      </div>
    </div>

  )
}

export default App
