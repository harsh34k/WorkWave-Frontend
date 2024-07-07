import React, { useState } from 'react';
import { PiWaves } from 'react-icons/pi';
// import { PiWaves } from './PiWaves'; // Replace with your custom PiWaves component or icon

const SlideInImageComponent = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return (
        <div className='flex flex-col justify-center items-center'>
            <p className='text-4xl font-bold '>
                Ride the Wave to Your Ideal Career
            </p>

            <span className='text-3xl'>
                <PiWaves />
            </span>

            <div className='relative overflow-hidden mt-8'>
                <img
                    src='/wave.png' // Replace with your actual image URL
                    alt='Wave Image'
                    className={`absolute transition-transform duration-1000 ease-in-out ${imageLoaded ? 'translate-x-0' : '-translate-x-full'
                        }`}
                    onLoad={handleImageLoad}
                />
            </div>
        </div>
    );
};

export default SlideInImageComponent;
