import React from 'react';
import { Button, Radio } from '@material-tailwind/react';
import { Education, JobFilters, Salary, WorkMode } from '../../types/index.types';
import { BiLoaderCircle } from 'react-icons/bi';

interface FilterComponentProps {
    filters: JobFilters;
    onFilterChange: (filters: JobFilters) => void;
    onApplyFilters: () => void;
    isLoading: boolean;
}

const FilterComponent: React.FC<FilterComponentProps> = ({ filters, onFilterChange, onApplyFilters, isLoading }) => {
    const handleRadioChange = (field: keyof JobFilters, value: any) => {
        onFilterChange({
            ...filters,
            [field]: filters[field] === value ? undefined : value
        });
    };
    let clicked = false;
    const handleOnClick = () => {
        if (clicked) {
            return clicked = false;
        }
        clicked = true;

    }

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
                        onClick={handleOnClick}
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

            <div>
                <label className="block font-semibold">Salary</label>
                <div className="space-y-1">
                    <Radio
                        crossOrigin={""}
                        name="salary"
                        color='blue'
                        value={Salary.BELOW_3_LAKHS}
                        checked={filters.salary === Salary.BELOW_3_LAKHS}
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
            <Button onClick={onApplyFilters} color={"blue"} className='flex justify-center items-center mt-4' disabled={isLoading} fullWidth >
                {isLoading && <BiLoaderCircle className="animate-spin mr-2" />}
                <span className="ml-2">Apply Filter</span>

            </Button>
        </div>

    );
};

export default FilterComponent;

