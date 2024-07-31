import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FilterComponent from './innerComponents/FilterComponent';
import JobCardComponent from './innerComponents/JobCardComponent';
import { Experience, JobFilters, Salary, WorkMode } from '../types/index.types';
import { Drawer, Button } from '@material-tailwind/react';

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
