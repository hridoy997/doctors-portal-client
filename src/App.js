import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import LogIn from './Pages/LogIn/LogIn';
import Appointment from './Pages/Appointment/Appointment';

function App() {
  return (
    <div data-theme="doctortheme" className='max-w-7xl mx-auto'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='appointment' element={<Appointment/>}/>
        <Route path='/login' element={<LogIn/>}/>
      </Routes>
    </div>
  );
}

export default App;
