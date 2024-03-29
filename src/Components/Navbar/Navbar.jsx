import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
    const { timerunning } = useContext(AuthContext)
    return (
        <div>

            <nav className="navbar max-w-screen-xl  bg-opacity-0 text-black bg-gray-100">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between">

                        <div className="flex space-x-4">
                            <div className='h-14 flex items-center'>
                                <img className='h-10 w-10' src="https://i.ibb.co/yS0yv86/Blue-Dark-Clean-Trendy-Simple-Minimalist-A-Luxury-Name-Letter-Company-Logo.png" alt="logo" />
                            </div>


                            <div className=" flex items-center space-x-1">
                                <Link to="/"><a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Home</a></Link>
                            </div>
                        </div>


                        {timerunning ?
                            <div className="flex items-center space-x-1">
                                <button className="p-2 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded-lg transition duration-300">Sign up</button>
                            </div>
                            :
                            ''
                        }

                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;