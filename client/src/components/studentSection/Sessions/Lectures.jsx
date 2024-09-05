// import firstThumb from "../../../assets/1.png";
import secThumb from "../../../assets/2.png";
import thirdThumb from "../../../assets/3.png";
import ThumbLecture from "../../../assets/YouTube Thumbnail.png";    

function Lectures() {
    const lectures = [
        {
            id: 1,
            date: "15 August",
            title: "How to Start Freelancing: A Beginner's Guide",
            description: "Learn the basics of freelancing, from setting up profiles to landing your first client.",
            imageUrl: ThumbLecture,  // Use the variable directly
            readTime: "8 mins",
        },
        {
            id: 2,
            date: "22 August",
            title: "Top 5 Freelancing Tips to Kickstart Your Career",
            description: "Discover the best freelancing tips to find work and build your portfolio.",
            imageUrl: thirdThumb,  // Changed to local image for consistency
            readTime: "5 mins",
        },
        {
            id: 3,
            date: "5 September",
            title: "Effective Time Management Tips for Freelancers",
            description: "Master your schedule and maximize productivity with these time management strategies.",
            imageUrl: secThumb,  // Changed to local image for consistency
            readTime: "7 mins",
        },
    ];

    return (
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                {lectures.map((lecture) => (
                    <div key={lecture.id} className="rounded overflow-hidden shadow-lg">
                        <a href="#"></a>
                        <div className="relative">
                            <a href="#">
                                <img className="w-full" src={lecture.imageUrl} alt={lecture.title} />
                                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                            </a>
                            {/* <a href="#!">
                                <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                    Photos
                                </div>
                            </a> */}
                            <a href="!#">
                                <div className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                    <span className="font-bold">{lecture.date.split(" ")[0]}</span>
                                    <small>{lecture.date.split(" ")[1]}</small>
                                </div>
                            </a>
                        </div>
                        <div className="px-6 py-4">
                            <a href="#" className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">
                                {lecture.title}
                            </a>
                            <p className="text-gray-500 text-sm">{lecture.description}</p>
                        </div>
                        <div className="px-6 py-4 flex flex-row items-center">
                            <span className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
                                <span className="ml-1">{lecture.readTime}</span>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Lectures;
