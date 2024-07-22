
import React, { useState } from 'react';
import { Input, Select, Option, Button } from '@material-tailwind/react';
import { FaSearch } from 'react-icons/fa';

import { filterJobAPI } from '../../api/job.Api'; // Adjust the import path if needed
import { useNavigate } from 'react-router-dom';
import { Experience, JobFilters, Salary, WorkMode } from '../../types/index.types';
import { useJobActions } from '../../hooks/useJobAction';

export const SearchBox: React.FC = () => {
  const { filterJobs } = useJobActions();
  const navigate = useNavigate();
  const [filters, setFilters] = useState<Partial<JobFilters>>({
    title: '',
    location: '',
    experience: '' as unknown as Experience,

  });


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string | null) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value !== null ? value as unknown as Experience : '',

    }));
  };

  // const handleSearch = async () => {
  //   try {
  //     console.log("filter hai bhai", filters);

  //     const data = await filterJobs.mutateAsync(filters as JobFilters); // Cast filters to JobFilters
  //     console.log('Filtered jobs:', data);
  //     navigate('/search');
  //     // Navigate or update the state with the filtered jobs if needed
  //   } catch (error) {
  //     console.error('Error filtering jobs:', error);
  //   }
  // };
  const handleSearch = async () => {
    try {
      console.log("filter hai bhai", filters);

      const queryString = new URLSearchParams(filters as any).toString();
      console.log("queryString", queryString);

      navigate(`/search/filter?${queryString}`);
    } catch (error) {
      console.error('Error filtering jobs:', error);
    }
  };


  return (
    <div className="w-full max-w-5xl mx-auto p-2 pt-5 bg-transparent rounded-lg">
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
            crossOrigin={""}
            label="Title"
            type="text"
            name="title"
            placeholder="Enter skills / designations / companies"
            value={filters.title || ''}
            onChange={handleInputChange}
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
            name="experience"
            value={filters.experience?.toString() || ''} // Convert to string here
            onChange={(value) => handleSelectChange('experience', value as string)}
            className="focus:outline-none text-gray-600 bg-transparent border-none"
            containerProps={{
              className: 'w-full',
            }}
          >
            <Option value="FRESHER">Fresher</Option>
            <Option value="ONE_TO_TWO_YEARS">1-2 years</Option>
            <Option value="TWO_TO_THREE_YEARS">2-3 years</Option>
            <Option value="THREE_TO_FOUR_YEARS">3-4 years</Option>
            <Option value="FOUR_TO_FIVE_YEARS">4-5 years</Option>
            <Option value="ABOVE_FIVE_YEARS">5+ years</Option>
          </Select>
        </div>
        <span className="mx-4 text-gray-300">|</span>

        {/* Location Input */}
        <div className="flex-grow px-2">
          <Input
            variant="standard"
            crossOrigin={""}
            label="Location"
            type="text"
            name="location"
            placeholder="Enter location"
            value={filters.location || ''}
            onChange={handleInputChange}
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
      <form className="mt-4 flex flex-wrap lg:hidden" onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
        {/* Search Icon */}
        <div className="text-gray-400 px-4">
          <FaSearch size={20} />
        </div>

        {/* Job Title Input */}
        <div className="w-full px-2 mb-4">
          <Input
            crossOrigin={""}
            variant="standard"
            label="Title"
            type="text"
            name="title"
            placeholder="Enter skills / designations / companies"
            value={filters.title || ''}
            onChange={handleInputChange}
            className="focus:outline-none text-gray-600 bg-transparent shadow-md rounded-lg px-3 py-2 w-full"
          />
        </div>

        {/* Experience Select */}
        <div className="w-full px-2 mb-4">
          <Select
            variant="standard"
            label="Experience"
            placeholder="Select experience"
            name="experience"
            value={filters.experience?.toString() || ''}
            onChange={(value) => handleSelectChange('experience', value as string)}
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
        <div className="w-full px-2 mb-4">
          <Input
            crossOrigin={""}
            variant="standard"
            label="Location"
            type="text"
            name="location"
            placeholder="Enter location"
            value={filters.location || ''}
            onChange={handleInputChange}
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
            type="submit"
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

// export  SearchBox;


