
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import RegistrationPage from './components/RegisterEmployer'
import LoginForm from './components/loginEmployer'
import LoginFormApplicant from './components/loginApplicant'
import RegistrationFormApplicant from './components/RegisterApplicant'
import JobBoard from './components/Jobs'
import { StickyNavbar } from './components/ui/Navbar'
import ProfilePage from './components/Profile'
import { SearchBox } from './components/innerComponents/Search'
import JobSearchPage from './components/SearchPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <StickyNavbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register-employer' element={<RegistrationPage />} />
          <Route path='/register' element={<RegistrationFormApplicant />} />
          <Route path='/login-employer' element={<LoginForm />} />
          <Route path='/login' element={<LoginFormApplicant />} />
          <Route path='/jobs' element={<JobBoard />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/search' element={<JobSearchPage />} />
          {/* <Route/>
      <Route/> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
