// import React from "react";

import DropDown from "./DropDown";
// import LogOutBtn from "./LogOutBtn";
import UserPng from '../../assets/User.png'



function NavBar() {
    return(
        <div className="flex h-20 items-center z-20 text-white " >
           
            <div className="mr-auto  w-20 text-center ml-10">
                <a href="/home" className="font-bold text-2xl">YourHR</a>
                </div>
                <div className="flex justify-around items-center text-center w-[60%]">
                <a href="/home">Home</a>
                <a href="/apply ">Find Job</a>
                <DropDown />
                <a href="/about">About Escrow</a>
                <a href="/entrerpinors">Join With Entrerpinors</a>
                {/* <a href="/home">Contact Us</a> */}
                {/* <LogOutBtn />
                 */}
                <a href="/profile" className="group relative inline-block">
                <img
                 className="h-10 w-10  group-hover:border-indigo-500 transition duration-300 ease-in-out transform group-hover:scale-110"
                 src={UserPng}
                 alt="User"
                />
                 <span
                 className="absolute inset-0 rounded-full  shadow-inner shadow-green-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out"
                ></span>
                </a>
                </div>
            
        </div>
    );
}

export default NavBar;

{/* <img src="https://websitedemos.net/plant-shop-04/wp-content/uploads/sites/160/2020/07/grow-plant-store-logo-white.svg" alt="Grow"/> */}