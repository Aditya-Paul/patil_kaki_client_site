import React from 'react';
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineHighQuality, MdDashboardCustomize } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { AiOutlineSolution } from "react-icons/ai";

const Selectme = () => {
    return (
        <div>
            <div className=' flex flex-col  md:flex-col md:justify-center md:text-center items-center max-w-screen-md mx-auto'>
                <div className='flex flex-col items-center justify-center pt-8'>
                    <h1 className='text-4xl font-bold text-black text-center bg-purple-400 p-4 rounded-xl mb-8'>Why should You go ahead with Me?</h1>
                </div>

                <div className='w-[40%] flex-col md:flex lg:flex-row '>

                    <div className=' flex flex-col items-start justify-center  px-2'>
                        <h1 className='py-4'><GrUserExpert style={{ fontSize: '5rem', padding: '4px' }} /></h1>
                        <h1 className='text-2xl font-bold text-black'>Expertise</h1>
                        <p className='text-start text-xl text-gray-500'>"Darsheel's extensive expertise ensures innovative solutions tailored to your business challenges."</p>
                    </div>
                </div>
                <div className='w-[50%]flex-col md:flex lg:flex-row items-end justify-center px-2'>
                    <div className=' bottom-[100px] w-[50%] flex flex-col items-end justify-center pr-2  '>
                        <h1 className='py-4'><MdOutlineHighQuality style={{ fontSize: '5rem', padding: '4px' }} /></h1>
                        <h1 className='text-2xl font-bold text-black'>Quality Assurance</h1>
                        <p className='text-end text-xl text-gray-500'>"We guarantee superior quality in every aspect of our service, ensuring your satisfaction and success."</p>
                    </div>

                </div>
                <div className='w-[40%] flex-col md:flex lg:flex-row '>

                    <div className=' flex flex-col items-start justify-center  px-2'>
                        <h1 className='py-4'><MdDashboardCustomize style={{ fontSize: '5rem', padding: '4px' }} /></h1>
                        <h1 className='text-2xl font-bold text-black'>Customization</h1>
                        <p className='text-start text-xl text-gray-500'> "Our services are fully customizable, designed to fit seamlessly with your unique business requirements."</p>
                    </div>
                </div>
                <div className='w-[50%]flex-col md:flex lg:flex-row items-end justify-center px-2'>
                    <div className=' bottom-[100px] w-[50%] flex flex-col items-end justify-center pr-2  '>
                        <h1 className='py-4'><FaHandshake style={{ fontSize: '5rem', padding: '4px' }} /></h1>
                        <h1 className='text-2xl font-bold text-black'>Client-Centric Approach:</h1>
                        <p className='text-end text-xl text-gray-500'>"We guarantee superior quality in every aspect of our service, ensuring your satisfaction and success."</p>
                    </div>

                </div>
                <div className='w-[40%] flex-col md:flex lg:flex-row '>

                    <div className=' flex flex-col items-start justify-center  px-2'>
                        <h1 className='py-4'><AiOutlineSolution style={{ fontSize: '5rem', padding: '4px' }} /></h1>
                        <h1 className='text-2xl font-bold text-black'>Innovative Solutions</h1>
                        <p className='text-start text-xl text-gray-500'>"At Darsheel, we thrive on innovation, delivering forward-thinking solutions to propel your business ahead of the curve."</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Selectme;