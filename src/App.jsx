import Home from "./pages/home"
import {UtilProvider}  from "./context/utilContext.jsx"

function App() {
  return (
    <>
      <UtilProvider>
        <Home />
      </UtilProvider>
    </>
  )
}

export default App
