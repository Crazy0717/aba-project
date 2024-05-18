import { Route, Routes } from "react-router-dom"
import { Home } from "./pages"
import { BlackBackground, Register } from "./components"

function App() {
  return (
    <div className="app">
      <BlackBackground />
      <Register />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
