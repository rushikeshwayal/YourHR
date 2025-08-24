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
            imageUrl: ThumbLecture,
            readTime: "8 mins",
            videoUrl: "https://www.youtube.com/embed/ZXmbb5fPfgk?si=ZGbELJhROssk9GWz", // replace with your real video link
        },
        {
            id: 2,
            date: "22 August",
            title: "Top 5 Freelancing Tips to Kickstart Your Career",
            description: "Discover the best freelancing tips to find work and build your portfolio.",
            imageUrl: thirdThumb,
            readTime: "5 mins",
            videoUrl: "https://www.youtube.com/embed/V2nuzSaiGVI?si=_meB41QjuQt5aEvE",
        },
        {
            id: 3,
            date: "5 September",
            title: "Effective Time Management Tips for Freelancers",
            description: "Master your schedule and maximize productivity with these time management strategies.",
            imageUrl: secThumb,
            readTime: "7 mins",
            videoUrl: "https://www.youtube.com/embed/cJRMpULkeFg?si=U1evYdVOeuxbMf4f",
        },
        {
            id: 4,
            date: "15 August",
            title: "How to Start Freelancing: A Beginner's Guide",
            description: "Learn the basics of freelancing, from setting up profiles to landing your first client.",
            imageUrl: ThumbLecture,
            readTime: "8 mins",
            videoUrl: "https://www.youtube.com/embed/LFUi5JGr0cE?si=1jragTSH0kYO4vqw",
        },
        {
            id: 5,
            date: "22 August",
            title: "Top 5 Freelancing Tips to Kickstart Your Career",
            description: "Discover the best freelancing tips to find work and build your portfolio.",
            imageUrl: thirdThumb,
            readTime: "5 mins",
            videoUrl: "https://www.youtube.com/embed/4GwafiGsTUM?si=RFsjnwIugsUtKPkA",
        },
        {
            id: 6,
            date: "5 September",
            title: "Effective Time Management Tips for Freelancers",
            description: "Master your schedule and maximize productivity with these time management strategies.",
            imageUrl: secThumb,
            readTime: "7 mins",
            videoUrl: "https://www.youtube.com/embed/eIrMbAQSU34?si=6OjOeoJq0uGJX9PY",
        },
    ];

    return (
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                {lectures.map((lecture) => (
                    <div key={lecture.id} className="rounded overflow-hidden shadow-lg">
                        <div className="relative">
                            {/* Embed YouTube Video */}
                            <iframe
                                className="w-full h-60"
                                src={lecture.videoUrl}
                                title={lecture.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>

                            <div className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                <span className="font-bold">{lecture.date.split(" ")[0]}</span>
                                <small>{lecture.date.split(" ")[1]}</small>
                            </div>
                        </div>
                        <div className="px-6 py-4">
                            <h2 className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">
                                {lecture.title}
                            </h2>
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
