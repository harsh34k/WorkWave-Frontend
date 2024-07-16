// JobSearchPage.tsx
import React, { useState } from 'react';
import FilterComponent from './innerComponents/FilterComponent';
import JobCardComponent from './innerComponents/JobCardComponent';
// import { sampleJobs } from './SampleJobData';
import { JobFilters } from '../types/index.types';
import { Drawer, Button } from '@material-tailwind/react';

export interface Job {
    title: string;
    company: string;
    rating: number;

    experience: string;
    salary: string;
    workMode: string;
    skills: string[];
    posted: string;
}

export const sampleJobs: Job[] = [
    {
        title: "Fullstack Developer",
        company: "Acme Visa Solutions",
        rating: 4.4,

        experience: "0-5 Yrs",
        salary: "7-15 Lacs P.A",
        workMode: "Remote",
        skills: ["Full Stack", ".Net Core", "Net Development", "Net Fullstack", "Angular", "Stack"],
        posted: "4 Days Ago"
    },
    {
        title: "Software Engineer",
        company: "Internet Unicorn",
        rating: 4.0,
        experience: "0-1 Yrs",
        salary: "2-6 Lacs P.A",
        workMode: "Noida",
        skills: ["Java", "Automation Testing", "HTML", "Java Selenium", "Testing", "CSS", "C++"],
        posted: "5 Days Ago"
    },
    // Add more sample jobs as needed
];

const JobSearchPage: React.FC = () => {
    const [filters, setFilters] = useState<JobFilters>({
        workMode: "" || undefined,
        experience: 0,
        salary: "" || undefined
    });

    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleFilterChange = (newFilters: JobFilters) => {
        setFilters(newFilters);
    };

    return (
        // <div className="min-h-screen flex flex-col lg:flex-row bg-gray-50 p-6 w-full  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png')` }}>
        <div className="flex flex-col lg:flex-row w-full  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png')` }}>
            // {/* Filters Drawer for small screens */}
            <div className="lg:hidden p-4">
                <Button onClick={() => setDrawerOpen(true)}>Filters</Button>
                <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                    <FilterComponent filters={filters} onFilterChange={handleFilterChange} />
                </Drawer>
            </div>

            {/* Filters Sidebar for large screens */}
            <div className="hidden lg:block w-1/4 p-4">
                <FilterComponent filters={filters} onFilterChange={handleFilterChange} />
            </div>

            {/* Job Cards */}
            <div className="w-full lg:w-3/4 p-4">
                <h1 className="text-2xl font-bold mb-4">Job Listings</h1>
                <div className="space-y-4">
                    {sampleJobs.map((job, index) => (
                        <JobCardComponent key={index} job={job} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JobSearchPage;
