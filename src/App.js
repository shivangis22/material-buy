
import './App.css';
import Navbar2 from './Components/TOP SECTION/Navbar2.js';
import LinkItems from './Components/TOP SECTION/LinkItems.js'; 
import Menubar from './Components/TOP SECTION/Menubar.js'
import ProductSliderSection from './Components/PRODUCT SLIDER/ProductSliderSection.js';

import Footer from './Components/BOTTOM SECTION/Footer';
import TopImageSlider from './Components/TOP SLIDER/TopImageSlider';
import { SliderData } from './Components/TOP SLIDER/SliderData';
// import Productslider from './Components/PRODUCT SLIDER/productslider';

function App() {
  return (
    <div className="App"> 
        <Navbar2/>
        <LinkItems/>
        <Menubar/>
        <TopImageSlider slide={SliderData}/> 
        <ProductSliderSection/>
        <Footer/>


        {/* <Navbar/>
        <LinkItems/> 
        <Menubar/>
        <TopImageSlider slide={SliderData}/> 
        <Productslider/>
        <Productslider/>
        <Productslider/>
        <Productslider/>
  
         <Footer/> */}
     </div>
  );
}

export default App;
