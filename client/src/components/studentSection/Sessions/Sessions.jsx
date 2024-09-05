import Hero from "./Hero";
import Mentors from './Mentors';
// import Pricing from "./Pricing";
import NavToHome from '../../../components/Home/NavToHome'
import Footer from "../../Home/Footer";
import Lectures from "./Lectures";
const Session = () => { 
    return (
       <div className="bg-gradient-to-b from-green-500 to-green-0 h-40">
        <NavToHome />
           <Hero />
           <Lectures />
           <Mentors />
           {/* <Pricing /> */}
           <Footer />
        </div>
    )   
}
export default Session;