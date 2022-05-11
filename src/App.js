import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom';
import Appoinment from './Components/Apponment/Appoinment';
function App() {
  return (
    <div>
       <Navbar/>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/appoinment' element={<Appoinment/>}/>
       </Routes>
       
    </div>
  );
}

export default App;
