import Home from "./pages/home"
import { utilProvider } from "./context/utilContext"

function App() {
  return (
    <>
      <utilProvider>
        <Home />
      </utilProvider>
    </>
  )
}

export default App
