import Hero from "./components/Hero/"
import Points from "./components/Points"
import Footer from "./components/Footer"
import About from "./components/About"
import CurseModules from "./components/CurseModules"
import "./styleGlobal.css"
function App() {
  return (
    <>
      <Hero/>
      <main className="main center">
        <Points />
        <CurseModules />
        <About />
      </main>
      <Footer />
    </>
  )
}

export default App
