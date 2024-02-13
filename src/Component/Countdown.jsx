import React, {  useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const formetTime = (seconds) => {
    let Minutes = Math.floor(seconds / 60)
    let Seconds = Math.floor(seconds - Minutes * 60)

    if (Minutes <= 15) Minutes - '0' + Minutes
    if (Seconds <= 15) Seconds - '0' + Seconds
    return Minutes + ":" + Seconds
}
const Countdown = () => {
    const [countdown, setcountdown] = useState(600)
    const {timerunning,settimerunning} = useContext(AuthContext)
    const timerid = useRef()

    useEffect(() => {
        timerid.current = setInterval(() => {
            setcountdown(prev => prev - 1)
        }, 1000)

        return () => clearInterval(timerid.current)
    }, [])

    useEffect(() => {
        if (countdown <= 0) {
            clearInterval(timerid.current)
            settimerunning(false)
            console.log(timerunning)

            
        }
    }, [countdown,settimerunning,timerunning])
    return (
        <div>
            
            <h2  className='text-4xl font-bold text-red-400'>{formetTime(countdown)}</h2>
        </div>
    );
};

export default Countdown;