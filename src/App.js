import './App.css';
import Appoinmentbanner from './Components/Banners/Appoinmentbanner';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';
import Testimonial from './Components/Testimonial/Testimonial';

function App() {
  return (
    <div>
       <Navbar/>
       <Header/>
       <Services/>
       <Appoinmentbanner/>
       <Testimonial/>
    </div>
  );
}

export default App;
