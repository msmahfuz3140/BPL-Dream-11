import React from 'react';
import dollerImg from '../../assets/DoubleDollar.png'
import navImg from '../../assets/logo.png'

import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        // <div className="navbar bg-base-100 mt-10 shadow-sm">
        //     <div className="flex-1">
        //         <a className="text-xl">
        //             <img src={navImg} alt="Logo" />
        //         </a>
        //     </div>
        //     <div className="flex justify-center items-center gap-5 md:gap-8 lg:gap-10">
        //         <p><a href="">Home</a></p>
        //         <p><a href="">Fixture</a></p>
        //         <p><a href="">Teams</a></p>
        //         <p><a href="">Schedules</a></p>
        //         <button className="flex justify-center items-center gap-2 font-semibold text-xl border border-gray-300 rounded-md px-4 py-2">
        //             <span>0 <span className='text-success'>coin</span></span>
        //             <img src={dollerImg} alt="Dollar" />
        //         </button>
        //     </div>
        // </div>

        <div className="navbar bg-base-100 mt-4 px-4 md:px-8 lg:px-12 py-2 rounded-xl shadow-sm relative">

            {/* LEFT : LOGO */}
            <div className="flex-1">
                <img src={navImg} alt="Logo" className="w-24 md:w-28" />
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-6">

                <a className="font-medium hover:text-primary transition">
                    Home
                </a>

                <a className="font-medium hover:text-primary transition">
                    Fixture
                </a>

                <a className="font-medium hover:text-primary transition">
                    Teams
                </a>

                <a className="font-medium hover:text-primary transition">
                    Schedules
                </a>

                {/* Coin */}
                <button className="flex items-center gap-2 text-sm font-semibold border border-gray-300 rounded-md px-3 py-1.5 hover:shadow transition">
                    <span className="text-2xl">
                        0 <span className="text-success">coin</span>
                    </span>
                    <img src={dollerImg} className="w-4" />
                </button>
            </div>

            {/* MOBILE RIGHT SIDE */}
            <div className="flex items-center gap-3 md:hidden">

                {/* Coin Middle */}
                <button className="flex items-center gap-1 text-sm font-semibold border border-gray-300 rounded-md px-2 py-1">
                    <span>
                        0 <span className="text-success">coin</span>
                    </span>
                    <img src={dollerImg} className="w-4" />
                </button>

                {/* Hamburger */}
                <button onClick={() => setOpen(!open)}>
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>

            </div>

            {/* MOBILE MENU */}
            {open && (
                <div className="absolute top-16 left-0 w-full bg-base-100 shadow-lg rounded-xl p-5 flex flex-col gap-4 md:hidden z-50">

                    <a className="hover:text-primary">Home</a>
                    <a className="hover:text-primary">Fixture</a>
                    <a className="hover:text-primary">Teams</a>
                    <a className="hover:text-primary">Schedules</a>

                </div>
            )}
        </div>
    );
};

export default Navbar;