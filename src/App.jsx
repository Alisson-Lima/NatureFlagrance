import Hero from "./components/Hero/"
import Points from "./components/Points"
import Footer from "./components/Footer"
import About from "./components/About"
import "./styleGlobal.css"
function App() {
  return (
    <>
      <Hero/>
      <main className="main center">
        <Points />
        <About />
      </main>
      <Footer />
    </>
  )
}

export default App
