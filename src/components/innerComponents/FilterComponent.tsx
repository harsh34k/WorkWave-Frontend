// import React from 'react';
// import { Radio, Slider } from '@material-tailwind/react';
// import { JobFilters, Salary, WorkMode } from '../../types/index.types';

// interface FilterComponentProps {
//     filters: JobFilters;
//     onFilterChange: (filters: JobFilters) => void;
// }

// const FilterComponent: React.FC<FilterComponentProps> = ({ filters, onFilterChange }) => {
//     return (
//         <div className="p-4 space-y-4 border border-gray-200 rounded-lg shadow-md">
//             <h2 className="text-xl font-bold">Filters</h2>

//             {/* Work Mode */}
//             <div>
//                 <label className="block font-semibold">Work Mode</label>
//                 <div className="space-y-1">
//                     <Radio
//                         crossOrigin={""}
//                         // color="blue"
//                         name="workMode"
//                         value="Work from office"
//                         checked={filters.workMode === WorkMode.ONSITE}
//                         onChange={() => onFilterChange({ ...filters, workMode: WorkMode.ONSITE })}
//                         label="Work from office"
//                     />
//                     <Radio
//                         crossOrigin={""}
//                         color="blue"
//                         name="workMode"
//                         value="Remote"
//                         checked={filters.workMode === WorkMode.REMOTE}
//                         onChange={() => onFilterChange({ ...filters, workMode: WorkMode.REMOTE })}
//                         label="Remote"
//                     />
//                     <Radio
//                         crossOrigin={""}
//                         color="blue"
//                         name="workMode"
//                         value="Hybrid"
//                         // checked={filters.workMode === WorkMode.HYBRID}
//                         onChange={() => onFilterChange({ ...filters, workMode: WorkMode.HYBRID })}
//                         label="Hybrid"
//                     />
//                 </div>
//             </div>

//             {/* Experience Slider */}
//             <div>
//                 <label className="block font-semibold">Experience</label>
//                 <Slider
//                     color="blue"
//                     value={filters.experience}
//                     min={0}
//                     max={30}
//                 onChange={(value) => onFilterChange({ ...filters, experience: value})}
//                                     checked={filters.workMode === WorkMode.REMOTE}
//                 //                         onChange={() => onFilterChange({ ...filters, workMode: WorkMode.REMOTE })}
//                 />
//                 <div className="text-sm text-gray-500">0 Yrs - 30 Yrs</div>
//             </div>

//             {/* Department */}
//             {/* <div>
//                 <label className="block font-semibold">Department</label>
//                 <div className="space-y-1">
//                     <Radio
//                         crossOrigin={""}
//                         color="blue"
//                         name="department"
//                         value="Engineering - Software"
//                         checked={filters.department === "Engineering - Software"}
//                         onChange={() => onFilterChange({ ...filters, department: "Engineering - Software" })}
//                         label="Engineering - Software"
//                     />
//                     <Radio
//                         crossOrigin={""}
//                         color="blue"
//                         name="department"
//                         value="Data Science & Analytics"
//                         checked={filters.department === "Data Science & Analytics"}
//                         onChange={() => onFilterChange({ ...filters, department: "Data Science & Analytics" })}
//                         label="Data Science & Analytics"
//                     />
//                     Add more departments as needed 
//                 </div>
//             </div> */}
//             <div>
//                 <label className="block font-semibold">Salary</label>
//                 <div className="space-y-1">
//                     <Radio
//                         crossOrigin={""}
//                         color="blue"
//                         name="salary"
//                         value="0-3 Lakhs"
//                         checked={filters.salary === Salary.BELOW_3_LAKHS}
//                         onChange={() => onFilterChange({ ...filters, salary: Salary.BELOW_3_LAKHS })}
//                         label="0-3 Lakhs"
//                     />
//                     <Radio
//                         crossOrigin={""}
//                         color="blue"
//                         name="salary"
//                         value="3-6 Lakhs"
//                         checked={filters.salary === Salary.FROM_3_TO_6_LAKHS}
//                         onChange={() => onFilterChange({ ...filters, salary: Salary.FROM_3_TO_6_LAKHS })}
//                         label="3-6 Lakhs"
//                     />

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FilterComponent;


// import React from 'react';
// import { Radio, Slider } from '@material-tailwind/react';
// import { JobFilters, Salary, WorkMode } from '../../types/index.types';

// interface FilterComponentProps {
//     filters: JobFilters;
//     onFilterChange: (filters: JobFilters) => void;
// }

// const FilterComponent: React.FC<FilterComponentProps> = ({ filters, onFilterChange }) => {
//     return (
//         <div className="p-4 space-y-4 border border-gray-200 rounded-lg shadow-md">
//             <h2 className="text-xl font-bold">Filters</h2>

//             {/* Work Mode */}
//             <div>
//                 <label className="block font-semibold">Work Mode</label>
//                 <div className="space-y-1">
//                     <Radio
//                         crossOrigin={""}
//                         name="workMode"
//                         value={WorkMode.ONSITE}
//                         checked={filters.workMode === WorkMode.ONSITE}
//                         onChange={() => onFilterChange({ ...filters, workMode: WorkMode.ONSITE })}
//                         label="Work from office"
//                     />
//                     <Radio
//                         crossOrigin={""}
//                         name="workMode"
//                         value={WorkMode.REMOTE}
//                         checked={filters.workMode === WorkMode.REMOTE}
//                         onChange={() => onFilterChange({ ...filters, workMode: WorkMode.REMOTE })}
//                         label="Remote"
//                     />
//                     <Radio
//                         crossOrigin={""}
//                         name="workMode"
//                         value={WorkMode.HYBRID}
//                         checked={filters.workMode === WorkMode.HYBRID}
//                         onChange={() => onFilterChange({ ...filters, workMode: WorkMode.HYBRID })}
//                         label="Hybrid"
//                     />
//                 </div>
//             </div>

//             {/* Experience Slider */}
//             <div>
//                 <label className="block font-semibold">Experience</label>
//                 <Slider
//                     color="blue"
//                     value={filters.experience}
//                     min={0}
//                     max={30}
//                     step={1}
//                     onChange={(e) => onFilterChange({ ...filters, experience: Number(e.target.value) })}
//                 />
//                 <div className="text-sm text-gray-500">0 Yrs - 30 Yrs</div>
//             </div>

//             {/* Department */}
//             {/* <div>
//                 <label className="block font-semibold">Department</label>
//                 <div className="space-y-1">
//                     <Radio
//                         crossOrigin={""}
//                         color="blue"
//                         name="department"
//                         value="Engineering - Software"
//                         checked={filters.department === "Engineering - Software"}
//                         onChange={() => onFilterChange({ ...filters, department: "Engineering - Software" })}
//                         label="Engineering - Software"
//                     />
//                     <Radio
//                         crossOrigin={""}
//                         color="blue"
//                         name="department"
//                         value="Data Science & Analytics"
//                         checked={filters.department === "Data Science & Analytics"}
//                         onChange={() => onFilterChange({ ...filters, department: "Data Science & Analytics" })}
//                         label="Data Science & Analytics"
//                     />
//                     Add more departments as needed 
//                 </div>
//             </div> */}
//             <div>
//                 <label className="block font-semibold">Salary</label>
//                 <div className="space-y-1">
//                     <Radio
//                         crossOrigin={""}
//                         name="salary"
//                         value={Salary.BELOW_3_LAKHS}
//                         checked={filters.salary === Salary.BELOW_3_LAKHS}
//                         onChange={() => onFilterChange({ ...filters, salary: Salary.BELOW_3_LAKHS })}
//                         label="0-3 Lakhs"
//                     />
//                     <Radio
//                         crossOrigin={""}
//                         name="salary"
//                         value={Salary.FROM_3_TO_6_LAKHS}
//                         checked={filters.salary === Salary.FROM_3_TO_6_LAKHS}
//                         onChange={() => onFilterChange({ ...filters, salary: Salary.FROM_3_TO_6_LAKHS })}
//                         label="3-6 Lakhs"
//                     />

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FilterComponent;


import React from 'react';
import { Button, Radio, Slider } from '@material-tailwind/react';
import { Education, JobFilters, Salary, WorkMode } from '../../types/index.types';

interface FilterComponentProps {
    filters: JobFilters;
    onFilterChange: (filters: JobFilters) => void;
    onApplyFilters: () => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({ filters, onFilterChange, onApplyFilters }) => {
    const handleRadioChange = (field: keyof JobFilters, value: any) => {
        onFilterChange({
            ...filters,
            [field]: filters[field] === value ? undefined : value
        });
    };

    return (
        <div className="p-4 space-y-4 border border-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Filters</h2>

            {/* Work Mode */}
            <div>
                <label className="block font-semibold">Work Mode</label>
                <div className="space-y-1">
                    <Radio
                        crossOrigin={""}
                        name="workMode"
                        color='blue'
                        value={WorkMode.ONSITE}
                        // checked={filters.workMode === WorkMode.ONSITE}
                        onChange={() => handleRadioChange('workMode', WorkMode.ONSITE)}
                        label="Work from office"
                    />
                    <Radio
                        crossOrigin={""}
                        name="workMode"
                        color='blue'
                        value={WorkMode.REMOTE}
                        // checked={filters.workMode === WorkMode.REMOTE}
                        onChange={() => handleRadioChange('workMode', WorkMode.REMOTE)}
                        label="Remote"
                    />
                    <Radio
                        crossOrigin={""}
                        name="workMode"
                        color='blue'
                        value={WorkMode.HYBRID}
                        // checked={filters.workMode === WorkMode.HYBRID}
                        onChange={() => handleRadioChange('workMode', WorkMode.HYBRID)}
                        label="Hybrid"
                    />
                </div>
            </div>

            {/* Experience Slider */}
            <div>
                {/* <label className="block font-semibold">Experience</label> */}
                {/* <Slider
                    color="blue"
                    value={filters.experience}
                    min={0}
                    max={30}
                    step={1}
                    onChange={(e) => onFilterChange({ ...filters, experience: Number(e.target.value) })}
                /> */}
                {/* <Slider color="blue" defaultValue={0} min={0} value={filters.experience}
                    onChange={(e) => onFilterChange({ ...filters, experience: Number(e.target.value) })} />
                <div className="text-sm text-gray-500">0 Yrs - 30 Yrs</div> */}
            </div>

            {/* Salary */}
            <div>
                <label className="block font-semibold">Salary</label>
                <div className="space-y-1">
                    <Radio
                        crossOrigin={""}
                        name="salary"
                        color='blue'
                        value={Salary.BELOW_3_LAKHS}
                        // checked={filters.salary === Salary.BELOW_3_LAKHS}
                        onChange={() => handleRadioChange('salary', Salary.BELOW_3_LAKHS as unknown as string)}
                        label="0-3 Lakhs"
                    />
                    <Radio
                        crossOrigin={""}
                        name="salary"
                        color='blue'
                        value={Salary.FROM_3_TO_6_LAKHS}
                        // checked={filters.salary === Salary.FROM_3_TO_6_LAKHS}
                        onChange={() => handleRadioChange('salary', Salary.FROM_3_TO_6_LAKHS)}
                        label="3-6 Lakhs"
                    />
                    <Radio
                        crossOrigin={""}
                        name="salary"
                        color='blue'
                        value={Salary.FROM_6_TO_10_LAKHS}
                        // checked={filters.salary === Salary.FROM_3_TO_6_LAKHS}
                        onChange={() => handleRadioChange('salary', Salary.FROM_6_TO_10_LAKHS)}
                        label="6-10 Lakhs"
                    />
                    <Radio
                        crossOrigin={""}
                        name="salary"
                        color='blue'
                        value={Salary.FROM_10_TO_15_LAKHS}
                        // checked={filters.salary === Salary.FROM_3_TO_6_LAKHS}
                        onChange={() => handleRadioChange('salary', Salary.FROM_10_TO_15_LAKHS)}
                        label="10-15 Lakhs"
                    />
                    <Radio
                        crossOrigin={""}
                        name="salary"
                        color='blue'
                        value={Salary.ABOVE_15_LAKHS}
                        // checked={filters.salary === Salary.FROM_3_TO_6_LAKHS}
                        onChange={() => handleRadioChange('salary', Salary.ABOVE_15_LAKHS)}
                        label="15+ Lakhs"
                    />
                </div>
            </div>
            {/* Education */}
            <div>
                <label className="block font-semibold">Education</label>
                <div className="space-y-1">
                    <Radio
                        crossOrigin={""}
                        name="education"
                        color='blue'
                        value={Education.TENTH}
                        // checked={filters.salary === Salary.BELOW_3_LAKHS}
                        onChange={() => handleRadioChange('education', Education.TENTH)}
                        label="10th"
                    />
                    <Radio
                        crossOrigin={""}
                        name="education"
                        color='blue'
                        value={Education.TWELFTH}
                        // checked={filters.salary === Salary.BELOW_3_LAKHS}
                        onChange={() => handleRadioChange('education', Education.TWELFTH)}
                        label="12th"
                    />
                    <Radio
                        crossOrigin={""}
                        name="education"
                        color='blue'
                        value={Education.GRADUATION}
                        // checked={filters.salary === Salary.BELOW_3_LAKHS}
                        onChange={() => handleRadioChange('education', Education.GRADUATION)}
                        label="Graduate"
                    />
                    <Radio
                        crossOrigin={""}
                        name="education"
                        color='blue'
                        value={Education.POSTGRADUATION}
                        // checked={filters.salary === Salary.BELOW_3_LAKHS}
                        onChange={() => handleRadioChange('education', Education.POSTGRADUATION)}
                        label="Post-Graduate"
                    />
                    <Radio
                        crossOrigin={""}
                        name="education"
                        color='blue'
                        value={Education.PHD}
                        // checked={filters.salary === Salary.BELOW_3_LAKHS}
                        onChange={() => handleRadioChange('education', Education.PHD)}
                        label="PHD"
                    />
                </div>
            </div>
            <Button onClick={onApplyFilters} color={"blue"} fullWidth className="mt-4">
                <span className="material-icons">Apply Filters</span>
            </Button>
        </div>

    );
};

export default FilterComponent;
