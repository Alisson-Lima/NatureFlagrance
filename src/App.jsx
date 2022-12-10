import Hero from "./components/Hero/"
import Points from "./components/Points"
import Footer from "./components/Footer"
import "./styleGlobal.css"
function App() {
  return (
    <>
      <Hero/>
      <main className="main center">
        <Points />
      </main>
      <Footer />
    </>
  )
}

export default App
