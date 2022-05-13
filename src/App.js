import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom';
import Appoinment from './Components/Apponment/Appoinment';
import Login from './Components/User/Login';
import Signup from './Components/User/Signup';
function App() {
  return (
    <div>
       <Navbar/>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/appoinment' element={<Appoinment/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/signup' element={<Signup/>}/>
       </Routes>
       
    </div>
  );
}

export default App;
