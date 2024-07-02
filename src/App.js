import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import LogIn from './Pages/LogIn/LogIn';
import Appointment from './Pages/Appointment/Appointment';
import SignUp from './Pages/LogIn/SignUp';
import RequireAuth from './Pages/LogIn/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';

function App() {
  return (
    <div data-theme="doctortheme" className='max-w-7xl mx-auto'>
    {/* <div data-theme="doctortheme" className=''> */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment/>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard></      Dashboard></RequireAuth>}>
          {/* Nested Routing */}
          <Route index element={<MyAppointment/>}></Route>
          <Route path='review' element={<MyReview/>}></Route>
          <Route path='history' element={<MyHistory/>}></Route>
        </Route>
        <Route path='/login' element={<LogIn/>}></Route>
        <Route path='/signUp' element={<SignUp/>}></Route>
      </Routes>
      {/* <ToastContainer position="top-center"/> */}
      <ToastContainer/>
    </div>
  );
}

export default App;
