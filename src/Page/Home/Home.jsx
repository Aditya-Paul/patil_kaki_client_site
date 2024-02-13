import React, { useContext } from 'react';
import Countdown from '../../Component/Countdown';
import Hero from '../../Components/Navbar/Hero';
import Founder from '../../Components/Founder';
import Selectme from '../../Components/Selectme';
import Cta from '../../Components/Cta';
import Form from '../../Components/Form';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
const Home = () => {
    const { timerunning } = useContext(AuthContext)
    return (
        <div>
            <div className='relative'>
                {/* Hero Section */}
                <Hero></Hero>

                {/* Founder Section */}
                <Founder></Founder>

                {/* Selectme Section */}
                <Selectme></Selectme>

                {/* Countdown Section */}
                <div className='m-20 flex flex-col items-center'>
                    <Countdown></Countdown>
                    <span className='text-2xl m-2'>🚀 Hurry Up! Time is Running Out! ⏳</span>
                    <h1 className='text-lg  text-center'>

                        Join us now and don't miss out on this exclusive opportunity! Our countdown timer is ticking away, with only 10 minutes left before it's too late! <span className='text-xl font-bold'>Sign Up</span> fast to secure your spot and unlock all the amazing benefits awaiting you. Whether it's accessing premium features, receiving special offers, or being part of our vibrant community, now's the time to take action!
                        <br />
                        <span className='text-2xl font-bold text-purple-700 '>Don't hesitate! Seize the moment and sign up now! Time waits for no one! If 10 minutes is over you have to Refresh the home page again. </span>
                    </h1>
                    {timerunning ?
                        ''
                        :
                        <Link to="/">
                            <button className="m-4 py-4 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded-lg transition duration-300">Signup</button>
                        </Link>
                    }

                </div>

                {/* Cta Section */}
                <Cta></Cta>

                {/* Form Section */}
                <Form></Form>
            </div>
        </div>
    );
};

export default Home;