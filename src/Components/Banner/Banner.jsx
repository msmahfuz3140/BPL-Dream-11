import React from 'react';
import bgShadow from '../../assets/bg-shadow.png'
import bgImg from '../../assets/banner-main.png'

const Banner = () => {
    return (
        <div className='bg-black rounded-3xl'>
            {/* <div className='min-h-[50vh] bg-black w-full rounded-3xl flex justify-center'
                style={{ backgroundImage: `url(${bgShadow})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

                <div className='text-center'>
                    <img src={bgImg} alt="Background Image" />
                    <h1 className='text-white text-3xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <h3 className='text-white'>Beyond Boundaries Beyond Limits</h3>
                    <button className='bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600'>Claim Free Credit</button>
                </div>
            </div> */}

            <div
                className="min-h-[50vh] md:min-h-[70vh] w-full rounded-3xl flex items-center justify-center text-center px-4 md:px-10"
                style={{
                    backgroundImage: `url(${bgShadow})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="space-y-4 max-w-3xl">

                    <img
                        src={bgImg}
                        alt="Cricket"
                        className="mx-auto w-28 md:w-36 lg:w-44"
                    />

                    <h1 className="text-white font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl">
                        Assemble Your Ultimate <span className="text-orange-500">Dream 11 Cricket Team</span>
                    </h1>

                    <h3 className="text-gray-400 text-sm font-semibold md:text-lg">
                        Beyond Boundaries Beyond Limits
                    </h3>

                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition">
                        Claim Free Credit
                    </button>

                </div>
            </div>

        </div>
    );
};

export default Banner;