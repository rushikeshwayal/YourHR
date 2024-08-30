
import '../../index.css'
import LandingHome from "./LandingHome";
import Nonummy from './Nonummy';
import PlantCare from './PlantCare';
import Adv from './Advertisement';
import Testimonial from './Testimonial';
import Footer from './Footer';
import Hero from './Hero';
import Feature from './Features';
function Home() {
    return(
         <div className="">
        <LandingHome />
        <Feature />
        <Nonummy />
        <PlantCare />
     
        <Hero />
        {/* <Adv /> */}
        <Testimonial />
        <Footer />
           

        
      </div>
    );
}

export default Home;