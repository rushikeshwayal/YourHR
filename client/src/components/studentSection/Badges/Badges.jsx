import  { useState } from 'react';
import NavToHome from '../../Home/NavToHome';      
import Footer from '../../Home/Footer';
const badges = [
    {
        id: 1,
        name: 'Gold Badge',
        description: 'Next level of premium',
        imageUrl:'https://img.freepik.com/free-psd/elegant-badge-isolated_23-2150997696.jpg?ga=GA1.1.293291939.1725359236&semt=ais_hybrid'
    },
    {
        id: 2,
        name: 'Silver Badge',
        description: 'Medium level of premium',
        imageUrl: 'https://img.freepik.com/premium-vector/silver-award-sport-medal-winners-with-green-ribbon-second-place-trophy-honor-badges_599062-3665.jpg?ga=GA1.1.293291939.1725359236&semt=ais_hybrid'
    },
    {
        id: 3,
        name: 'Bronze Badge',
        description: 'First level of premium',
        imageUrl: 'https://img.freepik.com/premium-vector/bronze-medal-with-red-ribbon-that-says-bronze_1305565-3139.jpg?ga=GA1.1.293291939.1725359236&semt=ais_hybrid'
    },
];

function Badges() {
    const [selectedBadge, setSelectedBadge] = useState(null);

    return (
        <div>
            <div className="bg-gradient-to-b from-green-500 to-green-0 h-40">
                <NavToHome />

                <main className="flex-grow p-8">
                    <header className="text-center mb-10">
                        <h1 className="text-4xl font-bold text-gray-800">Choose Your Badge</h1>
                        <p className="text-gray-600 mt-4">Select the badge that boosts your profile level....!</p>
                    </header>

                    <div className="flex flex-wrap justify-center gap-8">
                        {badges.map((badge) => (
                            <div
                                key={badge.id}
                                className={`p-6 bg-white shadow-lg rounded-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl ${selectedBadge === badge.id ? 'border-4 border-blue-600' : ''}`}
                                onMouseEnter={() => setSelectedBadge(badge.id)}
                            >
                                <img src={badge.imageUrl} alt={badge.name} className="w-32 h-32 object-cover mx-auto mb-4 rounded-full" />
                                <h2 className="text-xl font-semibold text-gray-700">{badge.name}</h2>
                                <p className="text-gray-600 mt-2">{badge.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        {selectedBadge && (
                            <div className="p-8 bg-white shadow-lg rounded-lg max-w-md mx-auto">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Selected Badge</h2>
                                <img
                                    src={badges.find((badge) => badge.id === selectedBadge).imageUrl}
                                    alt={badges.find((badge) => badge.id === selectedBadge).name}
                                    className="w-48 h-48 object-cover mx-auto mb-4 rounded-full"
                                />
                                <h3 className="text-xl font-semibold text-gray-700">{badges.find((badge) => badge.id === selectedBadge).name}</h3>
                                <p className="text-gray-600 mt-2">{badges.find((badge) => badge.id === selectedBadge).description}</p>
                                <button className="bg-green-600 text-white font-bold mt-5 py-2 px-6 rounded hover:bg-green-700 transition duration-300">
                                    Get Badge..!
                                </button>
                            </div>
                        )}
                    </div>
                </main>

                {/* <footer className="bg-gray-800 text-white py-4 mt-auto">
                    <div className="container mx-auto text-center">
                        <p>&copy; 2024 Badge Shop. All rights reserved.</p>
                    </div>
                </footer> */}
                <Footer/>
            </div>
        </div>
    );
}

export default Badges;