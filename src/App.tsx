
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register-employer' element={<Home />} />
          <Route path='/register' element={<Home />} />
          <Route path='/login-employer' element={<Home />} />
          <Route path='/login' element={<Home />} />
          {/* <Route/>
      <Route/> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
