import './App.css';
import Appoinmentbanner from './Components/Banners/Appoinmentbanner';
import Contuctus from './Components/Contuctus/Contuctus';
import Footer from './Components/Footer/Footer';
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
       <Contuctus/>
       <Footer/>
    </div>
  );
}

export default App;
