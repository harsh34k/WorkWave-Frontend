
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route/>
      <Route/> */}
        </Routes>
      </BrowserRouter>
      <h1>React App</h1>
    </>
  )
}

export default App
