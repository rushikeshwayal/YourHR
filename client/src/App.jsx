
import {BrowserRouter,Routes,Route} from  'react-router-dom'
// import './App.css'
// import Landing from "./components/Authentication/components/Home"
import Register from './components/Authentication/components/Register'
import ResetPassword from './components/Authentication/components/ResetPassword'
import Login from './components/Authentication/components/Login'
import AfterLogin from './components/Home/AfterLogin'
import Profile from './components/Home/UserProfile'
import Jobs from './components/JobVacancies/Jods'
// import JobVac from './components/JobVacancies/JobVac'
import JobDetails from './components/JobVacancies/JobDetail'


import { AuthProvider } from './components/Authentication/components/firebase/firebase'; // Adjust path if necessary

function App() {
  return (
    <AuthProvider>
      <BrowserRouter >
        <Routes>
          <Route index element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/home' element={<AfterLogin />} />
          <Route path='/profile' element={<Profile />} />
          <Route path="/apply" element={<Jobs />} />
        <Route path="/job" element={<JobDetails />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
