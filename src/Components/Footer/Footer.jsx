import React from 'react';
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <footer className="bg-[#06091A] text-white py-16 px-6 md:px-12 lg:px-24 mb-0 rounded-3xl -mt-20 md:-mt-30">
            {/* 1. Top Logo Section */}
            <div className="flex justify-center mb-16">
                <div className="relative group cursor-pointer">
                    <img
                        src={logo}
                        alt="Cricket Logo"
                        className="h-32 md:h-40 object-contain"
                    />
                </div>
            </div>

            {/* 2. Main Content Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

                {/* Column 1: About Us */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold">About Us</h3>
                    <p className="text-gray-400 leading-relaxed max-w-xs">
                        We are a passionate team dedicated to providing the best services to our customers.
                    </p>
                </div>

                {/* Column 2: Quick Links */}
                <div className="flex flex-col gap-4 md:pl-10">
                    <h3 className="text-xl font-bold">Quick Links</h3>
                    <ul className="text-gray-400 space-y-3">
                        <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                            <span className="text-xs">●</span> Home
                        </li>
                        <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                            <span className="text-xs">●</span> Services
                        </li>
                        <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                            <span className="text-xs">●</span> About
                        </li>
                        <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                            <span className="text-xs">●</span> Contact
                        </li>
                    </ul>
                </div>

                {/* Column 3: Subscribe */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold">Subscribe</h3>
                    <p className="text-gray-400 leading-relaxed mb-2">
                        Subscribe to our newsletter for the latest updates.
                    </p>

                    {/* Input Group */}
                    <div className="flex w-full max-w-sm overflow-hidden rounded-xl border border-gray-700">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-white text-gray-800 px-4 py-3 w-full outline-none"
                        />
                        <button
                            style={{
                                background: 'linear-gradient(90deg, #F0CB6E 0%, #E699B1 100%)',
                            }}
                            className="text-black font-bold px-6 py-3 transition-opacity hover:opacity-90 active:scale-95"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* 3. Bottom Copyright Section */}
            <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                @2024 Your Company All Rights Reserved.
                Created by MD MAHFUZUL HAQUE
            </div>
        </footer>
    );
};

export default Footer;