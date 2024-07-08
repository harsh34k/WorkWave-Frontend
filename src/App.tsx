
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import RegistrationPage from './components/RegisterEmployer'
import LoginForm from './components/loginEmployer'
import LoginFormApplicant from './components/loginApplicant'
import RegistrationFormApplicant from './components/RegisterApplicant'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register-employer' element={<RegistrationPage />} />
          <Route path='/register' element={<RegistrationFormApplicant />} />
          <Route path='/login-employer' element={<LoginForm />} />
          <Route path='/login' element={<LoginFormApplicant />} />
          {/* <Route/>
      <Route/> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
