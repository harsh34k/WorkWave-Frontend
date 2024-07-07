// import React, { useState } from 'react';
// import { Input, Select, Option, Button } from '@material-tailwind/react';
// import { FaSearch } from 'react-icons/fa';

// export const SearchBox = () => {
//   const [title, setTitle] = useState<string>('');
//   const [experience, setExperience] = useState<string>('');
//   const [location, setLocation] = useState<string>('');

//   const handleSearch = () => {
//     console.log('Search clicked:', { title, experience, location });
//   };

//   return (
//     <div className="w-full max-w-5xl mx-auto p-2 pt-5  bg-white rounded-full shadow-lg flex items-center">
//       {/* Search Icon */}
//       <div className="text-gray-400 px-4">
//         <FaSearch size={20} />
//       </div>

//       {/* Job Title Input */}
//       <div className="flex-grow px-2">
//         <Input
//           variant="standard"
//           crossOrigin={true}
//           label='Title'
//           type="text"
//           placeholder="Enter skills / designations / companies"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="focus:outline-none text-gray-600 bg-transparent border-none"
//           containerProps={{
//             className: 'w-full',
//           }}
//         // inputProps={{
//         //     style: { border: 'none', boxShadow: 'none' }
//         // }}
//         />
//       </div>
//       <span className="mx-4 text-gray-300">|</span>
//       {/* <div
//         className="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10"></div> */}

//       {/* Experience Select */}
//       <div className="flex-grow px-2">
//         <Select
//           variant='standard'
//           label='Experience'
//           placeholder="Select experience"
//           value={experience}
//           onChange={(value) => setExperience(value ?? '')}
//           className="focus:outline-none text-gray-600 bg-transparent border-none"
//           containerProps={{
//             className: 'w-full',
//           }}
//         // selectProps={{
//         //     style: { border: 'none', boxShadow: 'none' }
//         // }}
//         >
//           <Option value="0-1 years">Fresher</Option>
//           <Option value="1-2 years">1-2 years</Option>
//           <Option value="2-3 years">2-3 years</Option>
//           <Option value="3-4 years">3-4 years</Option>
//           <Option value="5+ years">4-5+ years</Option>
//         </Select>
//       </div>
//       <span className="mx-4 text-gray-300">|</span>

//       {/* Location Input */}
//       <div className="flex-grow px-2">
//         <Input
//           variant="standard"
//           crossOrigin={true}
//           label='Location'
//           type="text"
//           placeholder="Enter location"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//           className="focus:outline-none text-gray-600 bg-transparent border-none"
//           containerProps={{
//             className: 'w-full',
//           }}
//         // inputProps={{
//         //     style: { border: 'none', boxShadow: 'none' }
//         // }}
//         />
//       </div>

//       {/* Search Button */}
//       <Button
//         color="blue"
//         ripple={true}
//         variant="gradient"
//         size="lg"
//         onClick={handleSearch}
//         className="rounded-full px-6 py-2 text-white font-semibold shadow-md transition-all shadow-blue-500/20  mx-4"
//         style={{ backgroundColor: '#1D4ED8', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
//       >
//         Search
//       </Button>
//     </div>
//   );
// };

// export default SearchBox;


// import React, { useState } from 'react';
// import { Input, Select, Option, Button } from '@material-tailwind/react';
// import { FaSearch } from 'react-icons/fa';

// export const SearchBox = () => {
//   const [title, setTitle] = useState<string>('');
//   const [experience, setExperience] = useState<string>('');
//   const [location, setLocation] = useState<string>('');

//   const handleSearch = () => {
//     console.log('Search clicked:', { title, experience, location });
//   };

//   return (
//     <div className="w-full max-w-5xl mx-auto p-2 pt-5 bg-white rounded-full shadow-lg">
//       {/* Search Icon */}
//       <div className="text-gray-400 px-4">
//         <FaSearch size={20} />
//       </div>

//       {/* Form Layout */}
//       <form className="mt-4 sm:flex sm:flex-wrap sm:justify-center">
//         {/* Job Title Input */}
//         <div className="w-full sm:w-2/3 lg:w-1/3 px-2 mb-4">
//           <Input
//             crossOrigin={true}
//             variant="standard"
//             label='Title'
//             type="text"
//             placeholder="Enter skills / designations / companies"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="focus:outline-none text-gray-600 bg-transparent border-none w-full"
//           />
//         </div>

//         {/* Experience Select */}
//         <div className="w-full sm:w-2/3 lg:w-1/3 px-2 mb-4">
//           <Select
//             variant='standard'
//             label='Experience'
//             placeholder="Select experience"
//             value={experience}
//             onChange={(value) => setExperience(value ?? '')}
//             className="focus:outline-none text-gray-600 bg-transparent border-none w-full"
//           >
//             <Option value="0-1 years">Fresher</Option>
//             <Option value="1-2 years">1-2 years</Option>
//             <Option value="2-3 years">2-3 years</Option>
//             <Option value="3-4 years">3-4 years</Option>
//             <Option value="5+ years">4-5+ years</Option>
//           </Select>
//         </div>

//         {/* Location Input */}
//         <div className="w-full sm:w-2/3 lg:w-1/3 px-2 mb-4">
//           <Input
//             crossOrigin={true}
//             variant="standard"
//             label='Location'
//             type="text"
//             placeholder="Enter location"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             className="focus:outline-none text-gray-600 bg-transparent border-none w-full"
//           />
//         </div>

//         {/* Search Button */}
//         <div className="w-full px-2">
//           <Button
//             color="blue"
//             ripple={true}
//             variant="gradient"
//             size="lg"
//             onClick={handleSearch}
//             className="rounded-full px-6 py-2 text-white font-semibold shadow-md transition-all shadow-blue-500/20 w-full"
//             style={{ backgroundColor: '#1D4ED8', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
//           >
//             Search
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// };

// import React, { useState } from 'react';
// import { Input, Select, Option, Button } from '@material-tailwind/react';
// import { FaSearch } from 'react-icons/fa';

// export const SearchBox = () => {
//   const [title, setTitle] = useState<string>('');
//   const [experience, setExperience] = useState<string>('');
//   const [location, setLocation] = useState<string>('');

//   const handleSearch = () => {
//     console.log('Search clicked:', { title, experience, location });
//   };

//   return (
//     <div className="w-full max-w-5xl mx-auto p-2 pt-5 bg-white rounded-lg shadow-lg">
//       {/* Search Icon */}
//       <div className="text-gray-400 px-4">
//         <FaSearch size={20} />
//       </div>

//       {/* Form Layout */}
//       <form className="mt-4 flex flex-wrap">
//         {/* Job Title Input */}
//         <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
//           <Input
//             crossOrigin={true}
//             variant="standard"
//             label='Title'
//             type="text"
//             placeholder="Enter skills / designations / companies"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="focus:outline-none text-gray-600 bg-transparent border  rounded-lg px-3 py-2 w-full"
//           />
//         </div>

//         {/* Experience Select */}
//         <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
//           <Select
//             variant='standard'
//             label='Experience'
//             placeholder="Select experience"
//             value={experience}
//             onChange={(value) => setExperience(value ?? '')}
//             className="focus:outline-none text-gray-600 bg-transparent border border-gray-300 rounded-lg px-3 py-2 w-full"
//           >
//             <Option value="0-1 years">Fresher</Option>
//             <Option value="1-2 years">1-2 years</Option>
//             <Option value="2-3 years">2-3 years</Option>
//             <Option value="3-4 years">3-4 years</Option>
//             <Option value="5+ years">4-5+ years</Option>
//           </Select>
//         </div>

//         {/* Location Input */}
//         <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
//           <Input
//             crossOrigin={true}
//             variant="standard"
//             label='Location'
//             type="text"
//             placeholder="Enter location"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             className="focus:outline-none text-gray-600 bg-transparent border border-gray-300 rounded-lg px-3 py-2 w-full"
//           />
//         </div>

//         {/* Search Button */}
//         <div className="w-full px-2">
//           <Button
//             color="blue"
//             ripple={true}
//             variant="gradient"
//             size="lg"
//             onClick={handleSearch}
//             className="rounded-lg px-6 py-2 text-white font-semibold shadow-md transition-all shadow-blue-500/20 w-full"
//             style={{ backgroundColor: '#1D4ED8', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
//           >
//             Search
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SearchBox;

// import React, { useState } from 'react';
// import { Input, Select, Option, Button } from '@material-tailwind/react';
// import { FaSearch } from 'react-icons/fa';

// export const SearchBox = () => {
//   const [title, setTitle] = useState<string>('');
//   const [experience, setExperience] = useState<string>('');
//   const [location, setLocation] = useState<string>('');

//   const handleSearch = () => {
//     console.log('Search clicked:', { title, experience, location });
//   };

//   return (
//     <div className="w-full max-w-5xl mx-auto p-2 pt-5 bg-white rounded-full shadow-lg">
//       {/* Search Icon */}
//       <div className="text-gray-400 px-4">
//         <FaSearch size={20} />
//       </div>

//       {/* Form Layout - Large Devices */}
//       <form className="mt-4 hidden lg:flex justify-between items-center">
//         {/* Job Title Input */}
//         <div className="flex-grow px-2">
//           <Input
//             variant="standard"
//             crossOrigin={true}
//             label='Title'
//             type="text"
//             placeholder="Enter skills / designations / companies"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="focus:outline-none text-gray-600 bg-transparent border-none"
//             containerProps={{
//               className: 'w-full',
//             }}
//           />
//         </div>
//         <span className="mx-4 text-gray-300">|</span>
//         {/* Experience Select */}
//         <div className="flex-grow px-2">
//           <Select
//             variant='standard'
//             label='Experience'
//             placeholder="Select experience"
//             value={experience}
//             onChange={(value) => setExperience(value ?? '')}
//             className="focus:outline-none text-gray-600 bg-transparent border-none"
//             containerProps={{
//               className: 'w-full',
//             }}
//           >
//             <Option value="0-1 years">Fresher</Option>
//             <Option value="1-2 years">1-2 years</Option>
//             <Option value="2-3 years">2-3 years</Option>
//             <Option value="3-4 years">3-4 years</Option>
//             <Option value="5+ years">4-5+ years</Option>
//           </Select>
//         </div>
//         <span className="mx-4 text-gray-300">|</span>
//         {/* Location Input */}
//         <div className="flex-grow px-2">
//           <Input
//             variant="standard"
//             crossOrigin={true}
//             label='Location'
//             type="text"
//             placeholder="Enter location"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             className="focus:outline-none text-gray-600 bg-transparent border-none"
//             containerProps={{
//               className: 'w-full',
//             }}
//           />
//         </div>
//         {/* Search Button */}
//         <div className="px-2">
//           <Button
//             color="blue"
//             ripple={true}
//             variant="gradient"
//             size="lg"
//             onClick={handleSearch}
//             className="rounded-full px-6 py-2 text-white font-semibold shadow-md transition-all shadow-blue-500/20"
//             style={{ backgroundColor: '#1D4ED8', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
//           >
//             Search
//           </Button>
//         </div>
//       </form>

//       {/* Form Layout - Small and Medium Devices */}
//       <form className="mt-4 lg:hidden">
//         {/* Job Title Input */}
//         <div className="w-full sm:w-1/2 lg:w-auto px-2 mb-4">
//           <Input
//             crossOrigin={true}
//             variant="standard"
//             label='Title'
//             type="text"
//             placeholder="Enter skills / designations / companies"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="focus:outline-none text-gray-600 bg-transparent border border-gray-300 rounded-lg px-3 py-2 w-full"
//           />
//         </div>
//         {/* Experience Select */}
//         <div className="w-full sm:w-1/2 lg:w-auto px-2 mb-4">
//           <Select
//             variant='standard'
//             label='Experience'
//             placeholder="Select experience"
//             value={experience}
//             onChange={(value) => setExperience(value ?? '')}
//             className="focus:outline-none text-gray-600 bg-transparent border border-gray-300 rounded-lg px-3 py-2 w-full"
//           >
//             <Option value="0-1 years">Fresher</Option>
//             <Option value="1-2 years">1-2 years</Option>
//             <Option value="2-3 years">2-3 years</Option>
//             <Option value="3-4 years">3-4 years</Option>
//             <Option value="5+ years">4-5+ years</Option>
//           </Select>
//         </div>
//         {/* Location Input */}
//         <div className="w-full sm:w-1/2 lg:w-auto px-2 mb-4">
//           <Input
//             crossOrigin={true}
//             variant="standard"
//             label='Location'
//             type="text"
//             placeholder="Enter location"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             className="focus:outline-none text-gray-600 bg-transparent border border-gray-300 rounded-lg px-3 py-2 w-full"
//           />
//         </div>
//         {/* Search Button */}
//         <div className="w-full px-2">
//           <Button
//             color="blue"
//             ripple={true}
//             variant="gradient"
//             size="lg"
//             onClick={handleSearch}
//             className="rounded-lg px-6 py-2 text-white font-semibold shadow-md transition-all shadow-blue-500/20 w-full"
//             style={{ backgroundColor: '#1D4ED8', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
//           >
//             Search
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// };



// import React, { useState } from 'react';
// import { Input, Select, Option, Button } from '@material-tailwind/react';
// import { FaSearch } from 'react-icons/fa';

// export const SearchBox = () => {
//   const [title, setTitle] = useState<string>('');
//   const [experience, setExperience] = useState<string>('');
//   const [location, setLocation] = useState<string>('');

//   const handleSearch = () => {
//     console.log('Search clicked:', { title, experience, location });
//   };

//   return (
//     <div className="w-full max-w-5xl mx-auto p-2 pt-5 bg-white rounded-lg shadow-lg">
//       {/* Search Icon */}
//       <div className="text-gray-400 px-4">
//         <FaSearch size={20} />
//       </div>

//       {/* Form Layout - Large Devices */}
//       <form className="mt-4 flex flex-wrap">
//         {/* Job Title Input */}
//         <div className="w-full lg:w-auto px-2 mb-4">
//           <Input
//             crossOrigin={true}
//             variant="standard"
//             label='Title'
//             type="text"
//             placeholder="Enter skills / designations / companies"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="focus:outline-none text-gray-600 bg-transparent border border-gray-300 rounded-lg px-3 py-2 w-full block lg:inline-block"
//           />
//         </div>

//         {/* Experience Select */}
//         <div className="w-full lg:w-auto px-2 mb-4">
//           <Select
//             variant='standard'
//             label='Experience'
//             placeholder="Select experience"
//             value={experience}
//             onChange={(value) => setExperience(value ?? '')}
//             className="focus:outline-none text-gray-600 bg-transparent border border-gray-300 rounded-lg px-3 py-2 w-full block lg:inline-block"
//           >
//             <Option value="0-1 years">Fresher</Option>
//             <Option value="1-2 years">1-2 years</Option>
//             <Option value="2-3 years">2-3 years</Option>
//             <Option value="3-4 years">3-4 years</Option>
//             <Option value="5+ years">4-5+ years</Option>
//           </Select>
//         </div>

//         {/* Location Input */}
//         <div className="w-full lg:w-auto px-2 mb-4">
//           <Input
//             crossOrigin={true}
//             variant="standard"
//             label='Location'
//             type="text"
//             placeholder="Enter location"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             className="focus:outline-none text-gray-600 bg-transparent border border-gray-300 rounded-lg px-3 py-2 w-full block lg:inline-block"
//           />
//         </div>

//         {/* Search Button */}
//         <div className="w-full px-2">
//           <Button
//             color="blue"
//             ripple={true}
//             variant="gradient"
//             size="lg"
//             onClick={handleSearch}
//             className="rounded-lg px-6 py-2 text-white font-semibold shadow-md transition-all shadow-blue-500/20 w-full"
//             style={{ backgroundColor: '#1D4ED8', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
//           >
//             Search
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// };

// // export default SearchBox;





import React, { useState } from 'react';
import { Input, Select, Option, Button } from '@material-tailwind/react';
import { FaSearch } from 'react-icons/fa';

export const SearchBox: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [experience, setExperience] = useState<string>('');
  const [location, setLocation] = useState<string>('');

  const handleSearch = () => {
    console.log('Search clicked:', { title, experience, location });
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-2 pt-5 bg-transparent rounded-lg ">
      {/* Large Screen Layout */}
      <div className="hidden lg:flex lg:items-center lg:bg-white lg:rounded-full lg:shadow-lg lg:px-4 lg:py-2 lg:mx-auto">
        {/* Search Icon */}
        <div className="text-gray-400 pr-4">
          <FaSearch size={20} />
        </div>

        {/* Job Title Input */}
        <div className="flex-grow px-2">
          <Input
            variant="standard"
            crossOrigin={true}
            label="Title"
            type="text"
            placeholder="Enter skills / designations / companies"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="focus:outline-none text-gray-600 bg-transparent border-none"
            containerProps={{
              className: 'w-full',
            }}
          />
        </div>
        <span className="mx-4 text-gray-300">|</span>

        {/* Experience Select */}
        <div className="flex-grow px-2">
          <Select
            variant="standard"
            label="Experience"
            placeholder="Select experience"
            value={experience}
            onChange={(value) => setExperience(value ?? '')}
            className="focus:outline-none text-gray-600 bg-transparent border-none"
            containerProps={{
              className: 'w-full',
            }}
          >
            <Option value="0-1 years">Fresher</Option>
            <Option value="1-2 years">1-2 years</Option>
            <Option value="2-3 years">2-3 years</Option>
            <Option value="3-4 years">3-4 years</Option>
            <Option value="5+ years">4-5+ years</Option>
          </Select>
        </div>
        <span className="mx-4 text-gray-300">|</span>

        {/* Location Input */}
        <div className="flex-grow px-2">
          <Input
            variant="standard"
            crossOrigin={true}
            label="Location"
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="focus:outline-none text-gray-600 bg-transparent border-none"
            containerProps={{
              className: 'w-full',
            }}
          />
        </div>

        {/* Search Button */}
        <Button
          color="blue"
          ripple={true}
          variant="gradient"
          size="lg"
          onClick={handleSearch}
          className="rounded-full px-6 py-2 text-white font-semibold shadow-md transition-all shadow-blue-500/20 ml-4"
          style={{ backgroundColor: '#1D4ED8', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
        >
          Search
        </Button>
      </div>

      {/* Small and Medium Screen Layout */}
      <form className="mt-4 flex flex-wrap lg:hidden">
        {/* Search Icon */}
        <div className="text-gray-400 px-4">
          <FaSearch size={20} />
        </div>

        {/* Job Title Input */}
        <div className="w-full  px-2 mb-4">
          <Input
            crossOrigin={true}
            variant="standard"
            label="Title"
            type="text"
            placeholder="Enter skills / designations / companies"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="focus:outline-none text-gray-600 bg-transparent shadow-md rounded-lg px-3 py-2 w-full"
          />
        </div>

        {/* Experience Select */}
        <div className="w-full  px-2 mb-4">
          <Select
            variant="standard"
            label="Experience"
            placeholder="Select experience"
            value={experience}
            onChange={(value) => setExperience(value ?? '')}
            className="focus:outline-none text-gray-600 bg-transparent shadow-md rounded-lg px-3 py-2 w-full"
          >
            <Option value="0-1 years">Fresher</Option>
            <Option value="1-2 years">1-2 years</Option>
            <Option value="2-3 years">2-3 years</Option>
            <Option value="3-4 years">3-4 years</Option>
            <Option value="5+ years">4-5+ years</Option>
          </Select>
        </div>

        {/* Location Input */}
        <div className="w-full  px-2 mb-4">
          <Input
            crossOrigin={true}
            variant="standard"
            label="Location"
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="focus:outline-none text-gray-600 bg-transparent shadow-md rounded-lg px-3 py-2 w-full"
          />
        </div>

        {/* Search Button */}
        <div className="w-full px-2">
          <Button
            color="blue"
            ripple={true}
            variant="gradient"
            size="lg"
            onClick={handleSearch}
            className="rounded-lg px-6 py-2 text-white font-semibold shadow-md transition-all shadow-blue-500/20 w-full"
            style={{ backgroundColor: '#1D4ED8', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
          >
            Search
          </Button>
        </div>
      </form>
    </div>
  );
};


// import React, { useState } from 'react';
// import { Input, Select, Option, Button } from '@material-tailwind/react';
// import { FaSearch } from 'react-icons/fa';

// export const SearchBox = () => {
//   const [title, setTitle] = useState<string>('');
//   const [experience, setExperience] = useState<string>('');
//   const [location, setLocation] = useState<string>('');

//   const handleSearch = () => {
//     console.log('Search clicked:', { title, experience, location });
//   };

//   return (
//     <div
//       className="w-full max-w-5xl mx-auto p-2 pt-5 bg-cover bg-center bg-no-repeat rounded-lg shadow-lg"
//       style={{
//         backgroundImage: `url('https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png')`,
//       }}
//     >
//       {/* Search Icon */}
//       <div className="text-gray-400 px-4">
//         <FaSearch size={20} />
//       </div>

//       {/* Large Screen Layout */}
//       <div className="hidden lg:flex w-full items-center">
//         {/* Job Title Input */}
//         <div className="flex-grow px-2">
//           <Input
//             crossOrigin={true}
//             variant="standard"
//             label='Title'
//             type="text"
//             placeholder="Enter skills / designations / companies"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="focus:outline-none text-gray-600 bg-transparent border-none"
//             containerProps={{
//               className: 'w-full',
//             }}
//           />
//         </div>
//         <span className="mx-4 text-gray-300">|</span>

//         {/* Experience Select */}
//         <div className="flex-grow px-2">
//           <Select
//             variant='standard'
//             label='Experience'
//             placeholder="Select experience"
//             value={experience}
//             onChange={(value) => setExperience(value ?? '')}
//             className="focus:outline-none text-gray-600 bg-transparent border-none"
//             containerProps={{
//               className: 'w-full',
//             }}
//           >
//             <Option value="0-1 years">Fresher</Option>
//             <Option value="1-2 years">1-2 years</Option>
//             <Option value="2-3 years">2-3 years</Option>
//             <Option value="3-4 years">3-4 years</Option>
//             <Option value="5+ years">4-5+ years</Option>
//           </Select>
//         </div>
//         <span className="mx-4 text-gray-300">|</span>

//         {/* Location Input */}
//         <div className="flex-grow px-2">
//           <Input
//             crossOrigin={true}
//             variant="standard"
//             label='Location'
//             type="text"
//             placeholder="Enter location"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             className="focus:outline-none text-gray-600 bg-transparent border-none"
//             containerProps={{
//               className: 'w-full',
//             }}
//           />
//         </div>

//         {/* Search Button */}
//         <Button
//           color="blue"
//           ripple={true}
//           variant="gradient"
//           size="lg"
//           onClick={handleSearch}
//           className="rounded-full px-6 py-2 text-white font-semibold shadow-md transition-all shadow-blue-500/20 mx-4"
//           style={{ backgroundColor: '#1D4ED8', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
//         >
//           Search
//         </Button>
//       </div>

//       {/* Small to Medium Screen Layout */}
//       <form className="mt-4 flex flex-wrap lg:hidden">
//         {/* Job Title Input */}
//         <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
//           <Input
//             crossOrigin={true}
//             variant="standard"
//             label='Title'
//             type="text"
//             placeholder="Enter skills / designations / companies"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="focus:outline-none text-gray-600 bg-transparent border border-gray-300 rounded-lg px-3 py-2 w-full"
//           />
//         </div>

//         {/* Experience Select */}
//         <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
//           <Select
//             variant='standard'
//             label='Experience'
//             placeholder="Select experience"
//             value={experience}
//             onChange={(value) => setExperience(value ?? '')}
//             className="focus:outline-none text-gray-600 bg-transparent border border-gray-300 rounded-lg px-3 py-2 w-full"
//           >
//             <Option value="0-1 years">Fresher</Option>
//             <Option value="1-2 years">1-2 years</Option>
//             <Option value="2-3 years">2-3 years</Option>
//             <Option value="3-4 years">3-4 years</Option>
//             <Option value="5+ years">4-5+ years</Option>
//           </Select>
//         </div>

//         {/* Location Input */}
//         <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
//           <Input
//             crossOrigin={true}
//             variant="standard"
//             label='Location'
//             type="text"
//             placeholder="Enter location"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             className="focus:outline-none text-gray-600 bg-transparent border border-gray-300 rounded-lg px-3 py-2 w-full"
//           />
//         </div>

//         {/* Search Button */}
//         <div className="w-full px-2">
//           <Button
//             color="blue"
//             ripple={true}
//             variant="gradient"
//             size="lg"
//             onClick={handleSearch}
//             className="rounded-lg px-6 py-2 text-white font-semibold shadow-md transition-all shadow-blue-500/20 w-full"
//             style={{ backgroundColor: '#1D4ED8', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
//           >
//             Search
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SearchBox;
