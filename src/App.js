import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import LogIn from './Pages/LogIn/LogIn';
import Appointment from './Pages/Appointment/Appointment';
import SignUp from './Pages/LogIn/SignUp';
import RequireAuth from './Pages/LogIn/RequireAuth';

function App() {
  return (
    <div data-theme="doctortheme" className='max-w-7xl mx-auto'>
    {/* <div data-theme="doctortheme" className=''> */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment/>
          </RequireAuth>
        }/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
