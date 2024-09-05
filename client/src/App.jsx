
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
import Gettingstarted from './components/studentSection/Learning/Gettingstarted'
import Session from './components/studentSection/Sessions/Sessions'
import Community from './components/studentSection/Community/community'
import Badges from './components/studentSection/Badges/Badges'
import MentorBookingPage from './components/studentSection/Work With Mentor/Workwithmentor'
import Ecrow from './components/Escrow/Escrow'
import Entrerpinors from './components/Entrepreneur/entrepreneur'
import Chatbot from './components/ChatBot/Chatbot'
function App() {
  return (
    <AuthProvider>
      <BrowserRouter >
      <Chatbot />
        <Routes>
       
          <Route index element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/home' element={<AfterLogin />} />
          <Route path='/profile' element={<Profile />} />
          <Route path="/apply" element={<Jobs />} />
        <Route path="/job" element={<JobDetails />} />
        <Route path="/learnings" element={<Gettingstarted />} />
        <Route path="/sessions" element={<Session />} />
        <Route path="/Community" element={<Community />} />
        <Route path="/getbadges" element={<Badges />} />
        <Route path="/workwithcoach" element={<MentorBookingPage />} />
        <Route path="/about" element={<Ecrow />} />
        <Route path="/entrerpinors" element={<Entrerpinors />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
