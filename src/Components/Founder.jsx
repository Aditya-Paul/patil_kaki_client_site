import React from 'react';

const Founder = () => {
    return (
        <div>
            <section className="flex items-center justify-center bg-white">
                <div className="flex w-full max-w-2xl gap-20 lg:flex-row flex-col items-center justify-between">
                    <div className=" md:space-y-6 sm:space-y-5 space-y-4">
                        <h1 className="lg:text-5xl sm:text-4xl text-3xl font-bold leading-tight text-gray-900">Take your business to the next level.</h1>

                        <div className="flex space-x-4">
                            <button className="inline-flex flex-nowrap items-center justify-center rounded-md text-sm transition-colors disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 text-white">
                                Get Started
                            </button>
                            <button className="inline-flex flex-nowrap items-center justify-center rounded-md text-sm transition-colors disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 text-blue-600">
                                Learn More
                            </button>
                        </div>
                        <p className="text-sm text-gray-500">Trusted by 5000+ Users</p>
                    </div>
                    <div className="relative">
                        <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7" className="relative md:h-[200px]  sm:h-[400px] h-[300px]   w-[400px] bg-gray-400 rounded-b-full object-cover" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Founder;