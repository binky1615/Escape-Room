import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserInterface from "./pages/UserInterface"
import StartScreen from "./pages/StartScreen"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/start" element={<StartScreen />} />
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
