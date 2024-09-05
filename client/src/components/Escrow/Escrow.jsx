import Hero from "./Hero";
import NavToHome from '../Home/NavToHome'
import Features from "./Features";
import CallToAction from "./CallToAction";
import Footer from "../Home/Footer";
import PayMent from "./PayMent";
function Ecrow() {
    return(
        <div className="">
         <div className=' bg-indigo-500 z-50'>
                <NavToHome/>
                </div>
       <Hero/>
       <Features />
       <CallToAction />
       <PayMent />
       <Footer />
        </div>
    )
}

export default Ecrow;