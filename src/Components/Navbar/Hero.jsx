import React from 'react';

const Hero = () => {
    return (
        <div>
            <section class="bg-red-200 text-green-900 relative">
                <div class="min-h-screen hero-image bg-center bg-cover flex"
                    style={{ backgroundImage: 'url(https://i.ibb.co/XXJDc8S/Purple-and-Yellow-Pop-of-Auras-Business-and-Entrepreneurship-Fundraising-Updates.png)' }}>

                    <div class="min-h-screen hero-image bg-right-bottom bg-cover flex">
                        <div class="relative container mx-auto  flex items-end z-10">
                            <div>
                                <div class="content float-left py-4 px-5 my-5">
                                    <div class="heading mb-3 text-2xl md:text-4xl">Innovate Your D2C Strategy: Partner with PatilKaki for Visionary Solutions. Unlock Your Business Potential Today!</div>
                                </div>
                                <div class="cta clear-left px-5">
                                    <a class="
                no-underline
                btn btn-primary 
                block sm:inline-block global-transition
                text-white" href="" target="">
                                        <div class="flex justify-center items-center">
                                            <span>Join Alpha Today</span>
                                            <span class="fa fa-xs fa-arrow-right ml-4"></span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;