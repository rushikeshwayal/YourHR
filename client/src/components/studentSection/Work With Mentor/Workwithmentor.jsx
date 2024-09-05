// import React from 'react';
import Footer from '../../Home/Footer';
import NavToHome from '../../Home/NavToHome';   
import Pricing from './Pricing';
function MentorBookingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      {/* <header className="bg-indigo-700 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold">MentorHub</h1>
          <nav className="space-x-4">
            <a href="#benefits" className="hover:underline">Benefits</a>
            <a href="#mentors" className="hover:underline">Mentors</a>
            <a href="#book" className="hover:underline">Book Now</a>
          </nav>
        </div>
      </header> */}
      <div className='bg-gradient-to-b from-green-500 to-green-0 h-40'>
      <NavToHome />
</div>
      {/* Hero Section */}
      <section className="bg-gray-100 text-gray-900 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold mb-6">Get Expert Guidance for Your Freelancing Journey</h2>
          <p className="text-lg mb-8">
            Book a mentor to help you design a standout portfolio and guide you to your first freelancing project!
          </p>
          <a href="#book" className="bg-indigo-700 text-white px-6 py-3 rounded-full font-bold hover:bg-indigo-800">
            Book Your Mentor
          </a>
        </div>
      </section>

      {/* Mentorship Benefits */}
      <section id="benefits" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">Why Choose Our Mentorship?</h3>
          <div className="flex flex-wrap -mx-4">
            {[
              {
                title: 'Personalized Portfolio Design',
                description: 'Get one-on-one guidance to create a professional portfolio that stands out to potential clients.',
                icon: '📁'
              },
              {
                title: 'Comprehensive Freelancing Guide',
                description: 'Learn the ins and outs of freelancing, from bidding on projects to managing client relationships.',
                icon: '📘'
              },
              {
                title: 'Guaranteed Project Assistance',
                description: 'Your mentor will assist you in landing your first project, providing feedback and tips along the way.',
                icon: '🎯'
              },
            ].map((benefit, index) => (
              <div key={index} className="w-full md:w-1/3 px-4 mb-8">
                <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h4 className="text-2xl font-bold mb-2">{benefit.title}</h4>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
<Pricing/>
      {/* Mentor Profiles */}
      <section id="mentors" className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">Meet Our Expert Mentors</h3>
          <div className="flex flex-wrap -mx-4">
            {[
              {
                name: 'Jane Doe',
                expertise: 'UI/UX Designer & Freelancer',
                image: 'https://randomuser.me/api/portraits/women/44.jpg',
                description: 'Jane has over 10 years of experience in designing stunning portfolios and landing freelance projects.',
              },
              {
                name: 'John Smith',
                expertise: 'Full-Stack Developer & Mentor',
                image: 'https://randomuser.me/api/portraits/men/32.jpg',
                description: 'John specializes in mentoring new freelancers to help them kickstart their careers in web development.',
              },
            ].map((mentor, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <img className="w-32 h-32 rounded-full mx-auto mb-4" src={mentor.image} alt={`${mentor.name} Profile`} />
                  <h4 className="text-2xl font-bold mb-2">{mentor.name}</h4>
                  <p className="text-indigo-600 mb-2">{mentor.expertise}</p>
                  <p className="text-gray-700">{mentor.description}</p>
                  <a href="#book" className="mt-4 inline-block bg-indigo-700 text-white px-6 py-2 rounded-full font-bold hover:bg-indigo-800">
                    Book {mentor.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="book" className="py-20 bg-indigo-700 text-white text-center">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold mb-6">Ready to Get Started?</h3>
          <p className="text-lg mb-8">
            Take the first step towards improving your freelancing skills and portfolio. Book a mentor today!
          </p>
          <button className="bg-white text-indigo-700 px-8 py-4 rounded-full font-bold hover:bg-gray-100">
            Book Your Mentor Now
          </button>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 MentorHub. All Rights Reserved.</p>
          <div className="flex justify-center mt-4">
            <a href="#" className="mx-2 text-white hover:text-gray-400">Facebook</a>
            <a href="#" className="mx-2 text-white hover:text-gray-400">Twitter</a>
            <a href="#" className="mx-2 text-white hover:text-gray-400">LinkedIn</a>
          </div>
        </div>
      </footer> */}
      <Footer/>
    </div>
  );
}

export default MentorBookingPage;
