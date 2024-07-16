import React from 'react';
import { Radio, Slider } from '@material-tailwind/react';
import { JobFilters, Salary, WorkMode } from '../../types/index.types';

interface FilterComponentProps {
    filters: JobFilters;
    onFilterChange: (filters: JobFilters) => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({ filters, onFilterChange }) => {
    return (
        <div className="p-4 space-y-4 border border-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Filters</h2>

            {/* Work Mode */}
            <div>
                <label className="block font-semibold">Work Mode</label>
                <div className="space-y-1">
                    <Radio
                        crossOrigin={""}
                        // color="blue"
                        name="workMode"
                        value="Work from office"
                        checked={filters.workMode === WorkMode.ONSITE}
                        onChange={() => onFilterChange({ ...filters, workMode: WorkMode.ONSITE })}
                        label="Work from office"
                    />
                    <Radio
                        crossOrigin={""}
                        color="blue"
                        name="workMode"
                        value="Remote"
                        checked={filters.workMode === WorkMode.REMOTE}
                        onChange={() => onFilterChange({ ...filters, workMode: WorkMode.REMOTE })}
                        label="Remote"
                    />
                    <Radio
                        crossOrigin={""}
                        color="blue"
                        name="workMode"
                        value="Hybrid"
                        checked={filters.workMode === WorkMode.HYBRID}
                        onChange={() => onFilterChange({ ...filters, workMode: WorkMode.HYBRID })}
                        label="Hybrid"
                    />
                </div>
            </div>

            {/* Experience Slider */}
            <div>
                <label className="block font-semibold">Experience</label>
                <Slider
                    color="blue"
                    value={filters.experience}
                    min={0}
                    max={30}
                // onChange={(value) => onFilterChange({ ...filters, experience: value})}
                //                     checked={filters.workMode === WorkMode.REMOTE}
                // //                         onChange={() => onFilterChange({ ...filters, workMode: WorkMode.REMOTE })}
                />
                <div className="text-sm text-gray-500">0 Yrs - 30 Yrs</div>
            </div>

            {/* Department */}
            {/* <div>
                <label className="block font-semibold">Department</label>
                <div className="space-y-1">
                    <Radio
                        crossOrigin={""}
                        color="blue"
                        name="department"
                        value="Engineering - Software"
                        checked={filters.department === "Engineering - Software"}
                        onChange={() => onFilterChange({ ...filters, department: "Engineering - Software" })}
                        label="Engineering - Software"
                    />
                    <Radio
                        crossOrigin={""}
                        color="blue"
                        name="department"
                        value="Data Science & Analytics"
                        checked={filters.department === "Data Science & Analytics"}
                        onChange={() => onFilterChange({ ...filters, department: "Data Science & Analytics" })}
                        label="Data Science & Analytics"
                    />
                    Add more departments as needed 
                </div>
            </div> */}

            Salary
            <div>
                <label className="block font-semibold">Salary</label>
                <div className="space-y-1">
                    <Radio
                        crossOrigin={""}
                        color="blue"
                        name="salary"
                        value="0-3 Lakhs"
                        checked={filters.salary === Salary.BELOW_3_LAKHS}
                        onChange={() => onFilterChange({ ...filters, salary: Salary.BELOW_3_LAKHS })}
                        label="0-3 Lakhs"
                    />
                    <Radio
                        crossOrigin={""}
                        color="blue"
                        name="salary"
                        value="3-6 Lakhs"
                        checked={filters.salary === Salary.FROM_3_TO_6_LAKHS}
                        onChange={() => onFilterChange({ ...filters, salary: Salary.FROM_3_TO_6_LAKHS })}
                        label="3-6 Lakhs"
                    />

                </div>
            </div>
        </div>
    );
};

export default FilterComponent;
