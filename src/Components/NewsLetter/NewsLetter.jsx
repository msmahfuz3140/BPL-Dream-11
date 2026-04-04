import React from 'react';

const NewsLetter = () => {
    return (
        <div className="w-full min-h-100 flex items-center justify-center p-4">
            {/* Main Container with Gradient Background */}
            <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-white px-6 py-16 shadow-sm border border-gray-100">

                {/* Decorative Background Gradients (Custom Design match) */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-100/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Heading */}
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                        Subscribe to our Newsletter
                    </h2>

                    {/* Subheading */}
                    <p className="text-gray-500 text-lg md:text-xl max-w-2xl mb-10">
                        Get the latest updates and news right in your inbox!
                    </p>

                    {/* Form Container */}
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-2xl"
                    >
                        <div className="relative w-full">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all text-gray-700"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full sm:w-auto px-10 py-4 font-semibold text-black rounded-2xl transition-transform active:scale-95 whitespace-nowrap"
                            style={{
                                background: 'linear-gradient(90deg, #E699B1 0%, #F0CB6E 100%)',
                            }}
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;