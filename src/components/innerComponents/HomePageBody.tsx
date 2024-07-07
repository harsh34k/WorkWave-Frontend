import React, { useState } from 'react'
import { PiWaves } from 'react-icons/pi'
import WaveAnimationComponent from '../ui/WaveAnimation'
import "../css/waveAnimation.css"
import { SearchBox } from './Search';
import JobCategories from './jobComponent';
function HomePageBody() {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return (<>
        <div className='flex   flex-col justify-evenly'
        >
            <div className='flex flex-col justify-center items-center mt-10 pr-5 pl-5'>
                <p className='text-4xl font-bold'>
                    Ride the Wave to Your Ideal Career
                </p>
                {/* <WaveAnimationComponent />
             */}
                <div className='relative overflow-hidden '>
                    <img
                        src='/wave.png' // Replace with your actual image URL
                        alt='Wave Image'
                        style={{
                            transition: 'transform 1s ease-in-out',
                            transform: imageLoaded ? 'translateX(0)' : 'translateX(-100%)',
                        }}
                        // className={`absolute top-10
                        //     `}
                        onLoad={handleImageLoad}
                    />
                </div>

            </div>
            <div>
                <SearchBox />
            </div>
            <div>

            </div>
        </div>


    </>

    )
}

export default HomePageBody

// src/components/HomePageBody.tsx

// import React, { useState } from 'react';
// import { PiWaves } from 'react-icons/pi';
// import WaveAnimationComponent from '../ui/WaveAnimation';
// import '../css/waveAnimation.css';
// import { SearchBox } from './Search';
// import JobCategories from './jobComponent';

// function HomePageBody() {
//     const [imageLoaded, setImageLoaded] = useState(false);

//     const handleImageLoad = () => {
//         setImageLoaded(true);
//     };

//     return (
//         <div className="flex flex-col justify-evenly h-auto">
//             <div className="flex flex-col justify-center items-center mt-10 px-5">
//                 <p className="text-4xl font-bold text-center">
//                     Ride the Wave to Your Ideal Career
//                 </p>
//                 <div className="relative overflow-hidden w-full max-w-lg mx-auto mt-5">
//                     <img
//                         src="/wave.png" // Replace with your actual image URL
//                         alt="Wave Image"
//                         className="w-full h-auto transition-transform ease-in-out duration-1000 transform sm:pt-[5rem] md:pt-[5rem] lg:pt-0 xl:pt-0"
//                         // Use pt-0 for large screens and above
//                         style={{
//                             transform: imageLoaded ? 'translateX(0)' : 'translateX(-100%)',
//                         }}
//                         onLoad={handleImageLoad}
//                     />
//                 </div>
//             </div>
//             <div className="mt-8 px-4">
//                 <SearchBox />
//             </div>
//             <div className="mt-8 px-4">
//                 <JobCategories />
//             </div>
//         </div>
//     );
// }

// export default HomePageBody;
