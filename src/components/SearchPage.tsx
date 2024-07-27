// // JobSearchPage.tsx
// import React, { useState } from 'react';
// import FilterComponent from './innerComponents/FilterComponent';
// import JobCardComponent from './innerComponents/JobCardComponent';
// // import { sampleJobs } from './SampleJobData';
// import { JobFilters } from '../types/index.types';
// import { Drawer, Button } from '@material-tailwind/react';

// export interface Job {
//     title: string;
//     company: string;
//     rating: number;

//     experience: string;
//     salary: string;
//     workMode: string;
//     skills: string[];
//     posted: string;
// }

// export const sampleJobs: Job[] = [
//     {
//         title: "Fullstack Developer",
//         company: "Acme Visa Solutions",
//         rating: 4.4,

//         experience: "0-5 Yrs",
//         salary: "7-15 Lacs P.A",
//         workMode: "Remote",
//         skills: ["Full Stack", ".Net Core", "Net Development", "Net Fullstack", "Angular", "Stack"],
//         posted: "4 Days Ago"
//     },
//     {
//         title: "Software Engineer",
//         company: "Internet Unicorn",
//         rating: 4.0,
//         experience: "0-1 Yrs",
//         salary: "2-6 Lacs P.A",
//         workMode: "Noida",
//         skills: ["Java", "Automation Testing", "HTML", "Java Selenium", "Testing", "CSS", "C++"],
//         posted: "5 Days Ago"
//     },
//     // Add more sample jobs as needed
// ];

// const JobSearchPage: React.FC = () => {
//     const [filters, setFilters] = useState<JobFilters>({
//         workMode: "" || undefined,
//         experience: 0,
//         salary: "" || undefined
//     });

//     const [drawerOpen, setDrawerOpen] = useState(false);

//     const handleFilterChange = (newFilters: JobFilters) => {
//         setFilters(newFilters);
//     };

//     return (
//         // <div className="min-h-screen flex flex-col lg:flex-row bg-gray-50 p-6 w-full  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png')` }}>
//         <div className="flex flex-col lg:flex-row w-full  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png')` }}>
//             // {/* Filters Drawer for small screens */}
//             <div className="lg:hidden p-4">
//                 <Button onClick={() => setDrawerOpen(true)}>Filters</Button>
//                 <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
//                     <FilterComponent filters={filters} onFilterChange={handleFilterChange} />
//                 </Drawer>
//             </div>

//             {/* Filters Sidebar for large screens */}
//             <div className="hidden lg:block w-1/4 p-4">
//                 <FilterComponent filters={filters} onFilterChange={handleFilterChange} />
//             </div>

//             {/* Job Cards */}
//             <div className="w-full lg:w-3/4 p-4">
//                 <h1 className="text-2xl font-bold mb-4">Job Listings</h1>
//                 <div className="space-y-4">
//                     {sampleJobs.map((job, index) => (
//                         <JobCardComponent key={index} job={job} />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default JobSearchPage;


// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import FilterComponent from './innerComponents/FilterComponent';
// import JobCardComponent from './innerComponents/JobCardComponent';
// import { Experience, JobFilters } from '../types/index.types';
// import { Drawer, Button } from '@material-tailwind/react';
// import { filterJobAPI } from '../api/job.Api';

// const JobSearchPage: React.FC = () => {
//     const location = useLocation();
//     const [filters, setFilters] = useState<JobFilters>({
//         title: "" || undefined,
//         location: "" || undefined,
//         experience: "" || undefined,
//     });
//     const [jobs, setJobs] = useState<any[]>([]);
//     const [drawerOpen, setDrawerOpen] = useState(false);

//     useEffect(() => {
//         const fetchJobs = async () => {
//             const searchParams = new URLSearchParams(location.search);
//             const filters: JobFilters = {
//                 title: searchParams.get("title") || undefined,
//                 location: searchParams.get("location") || undefined,
//                 experience: searchParams.get("experience") as unknown as Experience || undefined,
//             };
//             setFilters(filters);

//             try {
//                 const data = await filterJobAPI(filters);
//                 console.log("data", data.data);

//                 setJobs(data.data);
//             } catch (error) {
//                 console.error("Error fetching jobs:", error);
//             }
//         };

//         fetchJobs();
//     }, []);

//     const handleFilterChange = (newFilters: JobFilters) => {
//         setFilters(newFilters);
//     };

//     return (
//         <div className="flex flex-col lg:flex-row w-full  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png')` }}>
//             <div className="lg:hidden p-4">
//                 <Button onClick={() => setDrawerOpen(true)}>Filters</Button>
//                 <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
//                     <FilterComponent filters={filters} onFilterChange={handleFilterChange} />
//                 </Drawer>
//             </div>

//             <div className="hidden lg:block w-1/4 p-4">
//                 <FilterComponent filters={filters} onFilterChange={handleFilterChange} />
//             </div>

//             <div className="w-full lg:w-3/4 p-4">
//                 <h1 className="text-2xl font-bold mb-4">Job Listings</h1>
//                 <div className="space-y-4">
//                     {jobs.length > 0 ? (
//                         jobs.map((job, index) => (
//                             <JobCardComponent key={index} job={job} />
//                         ))
//                     ) : (
//                         <p>No jobs found matching your criteria.</p>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default JobSearchPage;


import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FilterComponent from './innerComponents/FilterComponent';
import JobCardComponent from './innerComponents/JobCardComponent';
import { Education, Experience, JobFilters, Salary, WorkMode } from '../types/index.types';
import { Drawer, Button } from '@material-tailwind/react';
import { filterJobAPI } from '../api/job.Api';
import { SearchBox } from './innerComponents/Search';
import { useJobActions } from '../hooks/useJobAction';
import { BiLoaderCircle } from 'react-icons/bi';

const JobSearchPage: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { filterJobs } = useJobActions();
    const [filters, setFilters] = useState<JobFilters>({
        title: "" || undefined,
        location: "" || undefined,
        experience: "" || undefined,
        workMode: "" || undefined,
        education: "" || undefined,
        salary: "" || undefined,

    });
    const [jobs, setJobs] = useState<any[]>([]);
    const [drawerOpen, setDrawerOpen] = useState(false);

    useEffect(() => {
        const fetchJobs = async () => {
            const searchParams = new URLSearchParams(location.search);
            const filters: JobFilters = {
                title: searchParams.get("title") || undefined,
                location: searchParams.get("location") || undefined,
                experience: searchParams.get("experience") as unknown as Experience || undefined,
                salary: searchParams.get("salary") as unknown as Salary || undefined,
                workMode: searchParams.get("workMode") as unknown as WorkMode || undefined,
                education: searchParams.get("education") as unknown as string || undefined,
            };
            setFilters(filters);

            try {
                const data = await filterJobs.mutateAsync(filters);
                console.log("data", data.data);
                setJobs(data.data);
            } catch (error) {
                console.error("Error fetching jobs:", error);
            }
        };

        fetchJobs();
    }, [location.search]);

    const handleFilterChange = (newFilters: JobFilters) => {
        console.log("new filter", newFilters);

        setFilters(newFilters);
    };

    const handleApplyFilters = async () => {
        const searchParams = new URLSearchParams();

        if (filters.title) searchParams.set("title", filters.title);
        if (filters.workMode) searchParams.set("workMode", filters.workMode as unknown as string);
        if (filters.salary) searchParams.set("salary", filters.salary as unknown as string);
        if (filters.education) searchParams.set("education", filters.education as unknown as string);
        if (filters.location) searchParams.set("location", filters.location);
        if (filters.experience) searchParams.set("experience", filters.experience as unknown as string);

        const queryString = searchParams.toString();

        try {
            const data = await filterJobs.mutateAsync(filters); //filterJobAPI(filters)
            setJobs(data.data);
            navigate(`/search/filter?${queryString}`);
        } catch (error) {
            console.error("Error fetching jobs:", error);
        }
    };

    return (
        <div className="flex flex-col lg:flex-row w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png')` }}>

            <div className="lg:hidden p-4">
                <Button onClick={() => setDrawerOpen(true)}>Filters</Button>
                <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                    <FilterComponent filters={filters} onFilterChange={handleFilterChange} onApplyFilters={handleApplyFilters} isLoading={filterJobs.isLoading} />
                </Drawer>
            </div>

            <div className="hidden lg:block w-1/4 p-4">
                <FilterComponent filters={filters} onFilterChange={handleFilterChange} onApplyFilters={handleApplyFilters} isLoading={filterJobs.isLoading} />
            </div>

            <div className="w-full lg:w-3/4 p-4">
                <SearchBox />
                <h1 className="text-2xl font-bold mb-4">Job Listings</h1>
                <div className="space-y-4">
                    {filterJobs.isLoading ? (
                        // Show loading spinner when data is being fetched
                        <BiLoaderCircle size={"3rem"} className="animate-spin m-auto" />
                    ) : jobs.length > 0 ? (
                        jobs.map((job, index) => (
                            <JobCardComponent key={index} job={job} />
                        ))
                    ) :
                        (
                            // Show message if no jobs are found and loading is complete
                            <div>No Job Found</div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default JobSearchPage;
