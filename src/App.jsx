import Hero from "./components/Hero/"
import Points from "./components/Points"
import Footer from "./components/Footer"
import About from "./components/About"
import CurseModules from "./components/CurseModules"
import Comments from "./components/Comments"
import Pricing from "./components/Pricing"
import FAQ from "./components/FAQ"

import "./styleGlobal.css"
function App() {
  return (
    <>
      <Hero/>
      <main className="main center">
        <Points />
        <CurseModules />
        <About />
        <Comments/>
        <Pricing />
      </main>
      <FAQ />
      <Footer />
    </>
  )
}

export default App
