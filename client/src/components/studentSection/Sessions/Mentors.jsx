// import React from 'react';
import rushiIMG from '../../../assets/meeee.png';
import omkarjpg from '../../../assets/Omkar.jpg';  
import RenukaJpg from '../../../assets/Renuka.jpg' ;
import BhumikaJpg  from '../../../assets/Bhumika.jpg';
const Mentors = () => {
    return (
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
                <div className="relative w-full flex items-end justify-start text-left bg-cover bg-center" style={{ height: '450px', backgroundImage: `url(${BhumikaJpg})` }}>
                    <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
                    <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
                        {/* <a href="#" className="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500">Politics</a> */}
                        <div className="text-white font-regular flex flex-col space-y-1 justify-start">
                            {/* <span className="text-3xl leading-0 font-semibold">3</span> */}
                            {/* <span className="-mt-3">Aug</span> */}
                        </div>
                    </div>
                    <main className="p-5 z-10">
                        <a href="#" className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">Jon</a>
                    </main>
                </div>

                <div className="relative w-full flex items-end justify-start text-left bg-cover bg-center" style={{ height: '450px', backgroundImage: `url(${RenukaJpg})`}}>
                    <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
                    <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
                        {/* <a href="#" className="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500">Politics</a> */}
                        <div className="text-white font-regular flex flex-col justify-start">
                            {/* <span className="text-3xl leading-0 font-semibold">2</span> */}
                            {/* <span className="-mt-3">Aug</span> */}
                        </div>
                    </div>
                    <main className="p-5 z-10">
                        <a href="#" className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">Jane Desuza</a>
                    </main>
                </div>

                <div className="relative w-full flex items-end justify-start text-left bg-cover bg-center" style={{ height: '450px', backgroundImage: `url(${omkarjpg})`}}>
                    <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
                    <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
                        {/* <a href="#" className="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500">Politics</a> */}
                        <div className="text-white font-regular flex flex-col justify-start">
                            {/* <span className="text-3xl leading-0 font-semibold">1</span>
                            <span className="-mt-3">Aug</span> */}
                        </div>
                    </div>
                    <main className="p-5 z-10">
                        <a href="#" className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">Omkar Deshpande</a>
                    </main>
                </div>

                <div className="relative w-full flex items-end justify-start text-left bg-cover bg-center" style={{ height: '450px', backgroundImage:`url(${rushiIMG})` }}>
                    <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
                    <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
                        {/* <a href="#" className="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500">Politics</a> */}
                        <div className="text-white font-regular flex flex-col justify-start">
                            {/* <span className="text-3xl leading-0 font-semibold">25</span>
                            <span className="-mt-3">May</span> */}
                        </div>
                    </div>
                    <main className="p-5 z-10">
                        <a href="#" className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">Rushikesh Wayal</a>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Mentors;