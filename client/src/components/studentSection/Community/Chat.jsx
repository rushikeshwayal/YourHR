// import React from 'react';

function Chat() {
  return (
    <div className="font-sans antialiased h-screen flex">
      {/* Sidebar / channel list */}
      <div className="bg-indigo-900 text-purple-100 flex-none p-4 hidden md:block">
        {/* Sidebar icons with key commands */}
        <div className="cursor-pointer mb-4">
          <div className="bg-white h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-lg mb-1 overflow-hidden">
            <img src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png" alt="Profile Image" />
          </div>
          <div className="text-center text-white opacity-50 text-sm">&#8984;1</div>
        </div>
        <div className="cursor-pointer mb-4">
          <div className="bg-indigo-200 opacity-25 h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-lg mb-1 overflow-hidden">
            L
          </div>
          <div className="text-center text-white opacity-50 text-sm">&#8984;2</div>
        </div>
        <div className="cursor-pointer">
          <div className="bg-white opacity-25 h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-lg mb-1 overflow-hidden">
            <svg className="fill-current h-10 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Main Sidebar */}
      <div className="bg-indigo-800 text-purple-100 flex-none w-64 pb-6 hidden md:block">
        <div className="text-white mb-2 mt-3 px-4 flex justify-between">
          <div>
            <h1 className="font-semibold text-xl leading-tight mb-1 truncate">YourHR Community</h1>
            <div className="flex items-center mb-6">
              <svg className="h-2 w-2 fill-current text-green-400 mr-2" viewBox="0 0 20 20" aria-hidden="true">
                <circle cx="10" cy="10" r="10"></circle>
              </svg>
              <span className="text-white opacity-50 text-sm">Rushikesh Wayal</span>
            </div>
          </div>
          <div>
            <svg className="h-6 w-6 fill-current text-white opacity-25" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M14 8a4 4 0 1 0-8 0v7h8V8zM8.027 2.332A6.003 6.003 0 0 0 4 8v6l-3 2v1h18v-1l-3-2V8a6.003 6.003 0 0 0-4.027-5.668 2 2 0 1 0-3.945 0zM12 18a2 2 0 1 1-4 0h4z" fillRule="evenodd" />
            </svg>
          </div>
        </div>
        
        {/* Channels and Direct Messages */}
        <div className="mb-8">
          <div className="px-4 mb-2 text-white flex justify-between items-center">
            <div className="opacity-75">Channels</div>
            <div>
              <svg className="fill-current h-4 w-4 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
              </svg>
            </div>
          </div>
          <div className="bg-teal-600 py-1 px-4 text-white"># general</div>
        </div>

        <div className="mb-8">
          <div className="px-4 mb-2 text-white flex justify-between items-center">
            <div className="opacity-75">Direct Messages</div>
            <div>
              <svg className="fill-current h-4 w-4 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
              </svg>
            </div>
          </div>
          <div className="flex items-center mb-3 px-4">
            <svg className="h-2 w-2 fill-current text-green-400 mr-2" viewBox="0 0 20 20" aria-hidden="true">
              <circle cx="10" cy="10" r="10"></circle>
            </svg>
            <span className="text-white opacity-75">Omkar Deshpande <span className="text-gray-400 text-sm"></span></span>
          </div>
          <div className="flex items-center mb-3 px-4">
            <svg className="h-2 w-2 fill-current text-green-400 mr-2" viewBox="0 0 20 20" aria-hidden="true">
              <circle cx="10" cy="10" r="10"></circle>
            </svg>
            <span className="text-white opacity-75">Niraj </span>
          </div>
          <div className="flex items-center px-4 mb-6 opacity-50">
            <svg className="h-2 w-2 stroke-current text-white mr-2" viewBox="0 0 22 22" aria-hidden="true">
              <circle cx="11" cy="11" r="9" fill="none" strokeWidth="3"></circle>
            </svg>
            <span className="text-white">Rohit</span>
          </div>
        </div>

        <div>
          <div className="px-4 mb-2 text-white flex justify-between items-center">
            <div className="opacity-75">Apps</div>
            <div>
              <svg className="fill-current h-4 w-4 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
              </svg>
            </div>
          </div>
          <div className="flex items-center px-4">
            <span className="text-white opacity-75">Google Calendar</span>
          </div>
        </div>
      </div>

      {/* Chat content */}
      <div className="flex-1 flex flex-col bg-white overflow-hidden">
        {/* Chat messages */}
        <div className="px-6 py-4 flex-1 overflow-y-scroll">
          <div className="flex items-start mb-4 text-sm">
            <img src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png" className="w-10 h-10 rounded mr-3" alt="Profile" />
            <div className="flex-1 overflow-hidden">
              <div>
                <span className="font-bold">Bhumika</span>
                <span className="text-gray-500 text-xs">3:37 PM</span>
              </div>
              <p className="text-black leading-normal">
                Hey, just wanted to ask how everything is going. Are you able to solve the problem or need any help?
              </p>
            </div>
          </div>
          {/* Add more messages here */}
        </div>

        {/* Chat input */}
        <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
          <div className="relative">
            <input type="text" className="w-full border rounded-xl pl-4 pr-10 py-2 focus:outline-none focus:border-indigo-300 focus:shadow-lg" placeholder="Type your message..." />
            <button type="button" className="absolute top-0 right-0 mt-2 mr-2">
              <svg className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
