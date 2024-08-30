
import FreeBgJpg from "../../assets/FreeBg.jpg"

function Adv() {
    return(
        <div>
 <div className="relative w-full ">
  {/* Background image */}
  <div className="absolute inset-0 bg-black/45  z-10"></div>
  <img className="w-full h-[400px] bg-cover object-cover" src={FreeBgJpg} alt="Background" />

  {/* Text overlay */}
  <div className="absolute inset-0 flex flex-col gap-5 justify-center items-center">
    <h1 className="text-white text-4xl font-bold z-20">Buy Online Now & Get 10% Off!</h1>
    <p className="text-white text-sm font-bold z-20 ">Nature is the silent healer, whispering serenity into the soul and painting life with the colors of peace and beauty.</p>
    <button className="text-white bg-green-500 font-bold px-5 py-3 z-20 rounded-lg">Avail Now</button>
  </div>
</div>

 </div>

    );
}

export default Adv;
