import '../../../assets/e-learning/animation.svg';
import '../../../assets/e-learning/design.svg';
import '../../../assets/e-learning/animation.svg';
import Footer from '../../Home/Footer';
const CardJson = [
  {
    icon: "../../../assets/e-learning/animation.svg",
    title: "Animation",
    desc: "Learn the latest animation techniques to create stunning motion design and captivate your audience.",
  },
  {
    icon: "/assets/e-learning/design.svg",
    title: "Design",
    desc: "Create beautiful, usable interfaces to help shape the future of how the web looks.",
  },
  {
    icon: "/assets/e-learning/camera.svg",
    title: "Photography",
    desc: "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.",
  },
  {
    icon: "/assets/e-learning/crypto.svg",
    title: "Crypto",
    desc: "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.",
  },
  {
    icon: "/assets/e-learning/business.svg",
    title: "Business",
    desc: "A step-by-step playbook to help you start, scale, and sustain your business without outside investment.",
  },
];
const Gettingstarted = () => {
  return (
    <div className="h-full w-full bg-gradient-to-b from-white to-[#f0f1ff] bg-no-repeat overflow-hidden">
      <div className="px-5 xl:px-0 max-w-3xl lg:max-w-5xl xl:max-w-5xl w-full mx-auto relative">
        <div className="flex justify-between pt-5 max-w-2xl lg:max-w-[850px] xl:max-w-5xl ">
          <a href="/home" className="flex items-center text-green-500 font-bold text-xl">
            {/* <img src="/assets/e-learning/logo.svg" alt="Logo" /> */}
            YourHR.Academy
          </a>  
          <div>
            <button className="z-10 hover:opacity-80 bg-[#13183f] rounded-3xl text-white font-bold py-3 px-6 group relative overflow-hidden">
              Get Started
            </button>
          </div>
        </div>
        <div className="flex justify-start items-end my-5 xl:my-20">
          <div className="md:max-w-[400px] flex flex-col gap-6 my-14">
            <div>
              <h1 className="text-[#13183f] xl:text-[52px] text-[40px] font-extrabold leading-[50px]">
                Maximize skill, Get Clients, and Grow Your Freelancing Business
              </h1>
            </div>
            <div>
              <p className="text-[#83869a]">
                Our modern courses across a range of in-demand skills will give
                you the knowledge you need to live the life you want.
              </p>
            </div>
            <div>
              <button className="py-3 px-7 text-white font-bold bg-gradient-to-r from-red-500 to-pink-600 rounded-3xl group relative overflow-hidden">
                Get Started
                <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl"></div>
              </button>
            </div>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 md:translate-x-0 md:-right-32 md:left-auto xl:-right-80 xl:-top-20 md:-top-5 lg:-right-28 lg:-top-14 ">
            <img
              src="/assets/e-learning/background.png"
              alt=""
              className="relative md:max-w-[500px] lg:max-w-[600px] xl:max-w-[650px] hidden md:block"
            />
            <img
              src="/assets/e-learning/mobileback.png"
              alt="mobileback"
              className="relative -bottom-72 md:hidden block max-w-[343px] sm:max-w-[400px]"
            />
          </div>
        </div>
        <div className="pt-56 md:pt-0 grid sm:grid-cols-2 lg:grid-cols-3 gap-24 my-24 lg:my-32 place-items-center sm:place-items-stretch">
          <div className="hover:drop-shadow-2xl w-full bg-gradient-to-r from-pink-500 to-red-600 sm:max-w-xs rounded-xl px-10 py-5 text-white text-xl font-extrabold leading-8 shadow-xl">
            Check out our most popular courses!
          </div>
          {CardJson.map((data, index) => {
            return (
              <div
                key={index}
                className="shadow-xl hover:drop-shadow-2xl relative bg-white sm:max-w-xs rounded-xl px-5 py-5 flex flex-col gap-4"
              >
                <img className="absolute -top-12" src={data.icon} alt="icon" />
                <h1 className="text-[#13183f] font-extrabold text-xl">
                  {data.title}
                </h1>
                <p className="text-[#83869a] min-h-[80px]">{data.desc}</p>
                <div>
                  <button className="text-pink-600 font-extrabold leading-7">
                    Get Started
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-between items-center bg-[#13183f] py-5">
        <div className="px-5 max-w-3xl lg:max-w-5xl xl:max-w-5xl w-full flex justify-between mx-auto">
          <a href="#_" className="flex items-center">
            <img src="/assets/e-learning/footerlogo.svg" alt="Logo" />
          </a>
          <a href="#_">
            <button className="bg-gradient-to-r from-blue-500 to-pink-600 rounded-3xl text-white font-bold py-3 px-6 group relative overflow-hidden">
              Get Started
              <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl"></div>
            </button>
          </a>
        </div>
      </div>
       <Footer/>
    </div>
   
  );
};
export default Gettingstarted;