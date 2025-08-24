import { FaPaintBrush, FaFilm, FaCamera, FaBitcoin, FaBriefcase } from "react-icons/fa";
import Footer from "../../Home/Footer";

// Move data outside component
const CardJson = [
  {
    icon: <FaFilm className="w-10 h-10 text-pink-500" />,
    title: "Animation",
    desc: "Learn the latest animation techniques to create stunning motion design and captivate your audience.",
  },
  {
    icon: <FaPaintBrush className="w-10 h-10 text-blue-500" />,
    title: "Design",
    desc: "Create beautiful, usable interfaces to help shape the future of how the web looks.",
  },
  {
    icon: <FaCamera className="w-10 h-10 text-green-500" />,
    title: "Photography",
    desc: "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.",
  },
  {
    icon: <FaBitcoin className="w-10 h-10 text-yellow-500" />,
    title: "Crypto",
    desc: "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.",
  },
  {
    icon: <FaBriefcase className="w-10 h-10 text-purple-500" />,
    title: "Business",
    desc: "A step-by-step playbook to help you start, scale, and sustain your business without outside investment.",
  },
];

// Reusable card
const CourseCard = ({ icon, title, desc }) => (
  <div className="shadow-xl hover:drop-shadow-2xl relative bg-white sm:max-w-xs rounded-xl px-6 py-8 flex flex-col gap-4 transition-all">
    <div className="absolute -top-10">{icon}</div>
    <h2 className="text-[#13183f] font-extrabold text-xl">{title}</h2>
    <p className="text-[#83869a] min-h-[80px]">{desc}</p>
    <button className="text-pink-600 font-extrabold leading-7 self-start hover:underline">
      Get Started
    </button>
  </div>
);

const Gettingstarted = () => {
  return (
    <div className="h-full w-full bg-gradient-to-b from-white to-[#f0f1ff] overflow-hidden">
      {/* Header */}
      <header className="px-5 xl:px-0 max-w-5xl w-full mx-auto relative">
        <div className="flex justify-between pt-5 items-center">
          <a href="/home" className="flex items-center text-green-500 font-bold text-xl">
            TalentVerse.Academy
          </a>
          <button className="hover:opacity-80 bg-[#13183f] rounded-3xl text-white font-bold py-3 px-6">
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="px-5 xl:px-0 max-w-5xl w-full mx-auto relative">
        <div className="flex flex-col md:flex-row justify-between items-center my-10 xl:my-20">
          <div className="md:max-w-[400px] flex flex-col gap-6 my-10">
            <h1 className="text-[#13183f] xl:text-[52px] text-[36px] font-extrabold leading-tight">
              Maximize skill, Get Clients, and Grow Your Freelancing Business
            </h1>
            <p className="text-[#83869a]">
              Our modern courses across a range of in-demand skills will give you
              the knowledge you need to live the life you want.
            </p>
            <button className="py-3 px-7 text-white font-bold bg-gradient-to-r from-red-500 to-pink-600 rounded-3xl hover:opacity-90">
              Get Started
            </button>
          </div>

          <div className="relative mt-10 md:mt-0">
            {/* Placeholder illustration */}
            <div className="w-[350px] h-[250px] md:w-[500px] md:h-[350px] bg-gradient-to-r from-pink-200 to-purple-300 rounded-2xl shadow-md flex items-center justify-center text-2xl font-bold text-white">
              Illustration
            </div>
          </div>
        </div>

        {/* Courses Section */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-20 my-24 lg:my-32 place-items-center sm:place-items-stretch">
          <div className="hover:drop-shadow-2xl w-full bg-gradient-to-r from-pink-500 to-red-600 sm:max-w-xs rounded-xl px-10 py-8 text-white text-xl font-extrabold leading-8 shadow-xl">
            Check out our most popular courses!
          </div>
          {CardJson.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Gettingstarted;
