 // react imports
import React, { useEffect } from "react";

// project imports
import { OptionType } from "../../utils/types";

// 3rd party
import Select from 'react-select';


const sectionOptions: OptionType[] = [
    { value: 'hot', label: 'Hot' },
    { value: 'top', label: 'Top' },
    { value: 'user', label: 'User' }
]


const sortOptions: OptionType[] = [
    { value: 'viral', label: 'Viral' },
    { value: 'top', label: 'Top' },
    { value: 'time', label: 'Time' }
]

const windowOptions: OptionType[] = [
    { value: 'day', label: 'Day' },
    { value: 'week', label: 'Week' },
    { value: 'month', label: 'Month' },
    { value: 'year', label: 'Year' },
    { value: 'all', label: 'All' }
]

export default function Filters () {
    return (
        <>
            <div>
                <span>Show Virals</span>
                <Select options={sectionOptions} />
                <Select options={sortOptions} />
                <Select options={windowOptions} />
            </div>
        </>
    )
}