import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home'
import Appoinimentdatebanner from './Components/Banners/Appoinimentdatebanner';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
       <Navbar/>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/appoinment' element={<Appoinimentdatebanner/>}/>
       </Routes>
       
    </div>
  );
}

export default App;
