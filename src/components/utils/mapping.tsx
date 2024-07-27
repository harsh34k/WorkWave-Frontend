export const salaryMapping = {
    'ABOVE_15_LAKHS': '15+ Lakhs',
    'FROM_6_TO_10_LAKHS': '6-10 Lakhs',
    'BELOW_3_LAKHS': 'Below 3 Lakhs',
    'FROM_3_TO_6_LAKHS': '3-6 Lakhs',
    'FROM_10_TO_15_LAKHS': '10-15 Lakhs',
    // Add more mappings as needed
};

export const experienceMapping = {
    'ABOVE_FIVE_YEARS': '5+ Years',
    'THREE_TO_FOUR_YEARS': '3-4 Years',
    'FOUR_TO_FIVE_YEARS': '4-5 Years',
    'TWO_TO_THREE_YEARS': '2-3 Years',
    'ONE_TO_TWO_YEARS': '1-2 Years',
    'FRESHER': 'Fresher',
    // Add more mappings as needed
};

export const educationMapping = {
    'POSTGRADUATION': 'Postgraduate',
    'GRADUATION': 'Graduate',
    'TENTH': '10th',
    'TWELFTH': '12th',
    'PHD': 'PHD',
    // Add more mappings as needed
};


export const formatValue = (value: any, mapping: any) => {
    return mapping[value] || value;
};
