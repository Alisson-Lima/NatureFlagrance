import Hero from "./components/Hero/"
import Points from "./components/Points"
import "./styleGlobal.css"
function App() {
  return (
    <>
      <Hero/>
      <main className="main center">
        <Points />
      </main>
    </>
  )
}

export default App
