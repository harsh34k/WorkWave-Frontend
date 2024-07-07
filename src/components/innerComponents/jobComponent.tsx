// // src/components/JobCategories.tsx

// import React from 'react';
// import backgroundImage from "/gradient-bg.png"

// const jobCategories = [
//     { title: 'Full Stack Developer', jobs: '17K+ Jobs' },
//     { title: 'Mobile / App Developer', jobs: '2.2K+ Jobs' },
//     { title: 'Front End Developer', jobs: '3.2K+ Jobs' },
//     { title: 'DevOps Engineer', jobs: '2K+ Jobs' },
//     { title: 'Engineering Manager', jobs: '1.2K+ Jobs' },
//     // { title: 'Technical Lead', jobs: '10.3K+ Jobs' },
// ];

// const JobCategories: React.FC = () => {
//     return (
//         <div className=" w-full max-w-5xl  flex items-center p-8 rounded-lg shadow-lg" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', height: "27rem" }}>
//             <div className="flex-1">
//                 <img src="/vector.png" alt="Illustration" style={{ height: "22rem" }} />
//                 <h2 className="text-2xl font-bold ">Discover jobs across popular roles</h2>
//                 <p className="text-lg ">Select a role and we’ll show you relevant jobs for it!</p>
//             </div>
//             <div className="flex-1 bg-white p-6 rounded-md shadow-lg " style={{ height: "29rem" }}>
//                 {jobCategories.map((category, index) => (
//                     <div key={index} className="p-4 border-b last:border-b-0">
//                         <h3 className="text-xl font-semibold">{category.title}</h3>
//                         <p className="text-gray-500">{category.jobs}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default JobCategories;


// import React from 'react';
// import backgroundImage from "/gradient-bg.png";

// const jobCategories = [
//     { title: 'Full Stack Developer', jobs: '17K+ Jobs' },
//     { title: 'Mobile / App Developer', jobs: '2.2K+ Jobs' },
//     { title: 'Front End Developer', jobs: '3.2K+ Jobs' },
//     { title: 'DevOps Engineer', jobs: '2K+ Jobs' },
//     { title: 'Engineering Manager', jobs: '1.2K+ Jobs' },
// ];

// const JobCategories: React.FC = () => {
//     return (
//         <div
//             className="w-full max-w-5xl flex flex-col md:flex-row items-center p-8 rounded-lg shadow-lg"
//             style={{
//                 backgroundImage: `url(${backgroundImage})`,
//                 backgroundSize: 'cover',
//                 height: 'auto', // Set height to auto for responsiveness
//                 backgroundPosition: 'center',
//             }}
//         >
//             <div className="flex-1 mb-8 md:mb-0">
//                 <img
//                     src="/vector.png"
//                     alt="Illustration"
//                     className="w-full max-w-xs md:max-w-none mx-auto"
//                     style={{ height: 'auto' }}
//                 />
//                 <h2 className="text-2xl font-bold mt-4 text-center md:text-left">
//                     Discover jobs across popular roles
//                 </h2>
//                 <p className="text-lg text-center md:text-left mt-2">
//                     Select a role and we’ll show you relevant jobs for it!
//                 </p>
//             </div>
//             <div
//                 className="flex-1 bg-white p-6 rounded-md shadow-lg w-full max-w-sm md:max-w-none"
//                 style={{ height: 'auto' }}
//             >
//                 {jobCategories.map((category, index) => (
//                     <div key={index} className="p-4 border-b last:border-b-0">
//                         <h3 className="text-xl font-semibold">{category.title}</h3>
//                         <p className="text-gray-500">{category.jobs}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default JobCategories;


// src/components/JobCategories.tsx


// src/components/JobCategories.tsx

// import React from 'react';
// import backgroundImage from '/gradient-bg.png';

// const jobCategories = [
//     { title: 'Full Stack Developer', jobs: '17K+ Jobs' },
//     { title: 'Mobile / App Developer', jobs: '2.2K+ Jobs' },
//     { title: 'Front End Developer', jobs: '3.2K+ Jobs' },
//     { title: 'DevOps Engineer', jobs: '2K+ Jobs' },
//     { title: 'Engineering Manager', jobs: '1.2K+ Jobs' },
// ];

// const JobCategories: React.FC = () => {
//     return (
//         <div
//             className="w-full max-w-5xl flex flex-col md:flex-row items-center p-4 md:p-8 rounded-lg shadow-lg"
//             style={{
//                 backgroundImage: `url(${backgroundImage})`,
//                 backgroundSize: 'cover',
//                 height: 'auto',
//                 backgroundPosition: 'center',
//             }}
//         >
//             <div className="flex-1 mb-6 md:mb-0 md:mr-6">
//                 <img
//                     src="/vector.png"
//                     alt="Illustration"
//                     className="w-full max-w-xs md:max-w-none mx-auto "
//                     style={{ height: 'auto' }}
//                 />
//                 <h2 className="text-2xl font-bold mt-4 text-center md:text-left">
//                     Discover jobs across popular roles
//                 </h2>
//                 <p className="text-lg text-center md:text-left mt-2">
//                     Select a role and we’ll show you relevant jobs for it!
//                 </p>
//             </div>
//             <div
//                 className="flex-1 bg-white p-6 rounded-md shadow-lg w-full"
//                 style={{ minHeight: '15rem' }}
//             >
//                 {jobCategories.map((category, index) => (
//                     <div key={index} className="p-4 border-b last:border-b-0">
//                         <h3 className="text-xl font-semibold">{category.title}</h3>
//                         <p className="text-gray-500">{category.jobs}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default JobCategories;

// src/components/JobCategories.tsx

// src/components/HomePageBody.tsx



// src/components/JobCategories.tsx

import React from 'react';
import backgroundImage from '/gradient-bg.png';

const jobCategories = [
    { title: 'Full Stack Developer', jobs: '17K+ Jobs' },
    { title: 'Mobile / App Developer', jobs: '2.2K+ Jobs' },
    { title: 'Front End Developer', jobs: '3.2K+ Jobs' },
    { title: 'DevOps Engineer', jobs: '2K+ Jobs' },
    { title: 'Engineering Manager', jobs: '1.2K+ Jobs' },
];

const JobCategories: React.FC = () => {
    return (
        <div
            className="w-full max-w-5xl flex flex-col md:flex-row items-center p-4 md:p-8 rounded-lg shadow-lg"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="flex-1 mb-6 md:mb-0 md:mr-6">
                <img
                    src="/vector.png"
                    alt="Illustration"
                    className="w-full max-w-xs md:max-w-none mx-auto sm:pt-[5rem] md:pt-[5rem] lg:pt-0"
                // Padding-top of 5rem only on small and medium screens
                />
                <h2 className="text-2xl font-bold mt-4 text-center md:text-left">
                    Discover jobs across popular roles
                </h2>
                <p className="text-lg text-center md:text-left mt-2">
                    Select a role and we’ll show you relevant jobs for it!
                </p>
            </div>
            <div
                className="flex-1 bg-white p-6 rounded-md shadow-lg w-full"
                style={{ minHeight: '15rem' }}
            >
                {jobCategories.map((category, index) => (
                    <div key={index} className="p-4 border-b last:border-b-0">
                        <h3 className="text-xl font-semibold">{category.title}</h3>
                        <p className="text-gray-500">{category.jobs}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobCategories;


