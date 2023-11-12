// react imports
import  { useEffect, useState } from "react";

// project imports
import { OptionType } from "../../utils/types";

// 3rd party
import Select from 'react-select';

interface Props{
    onChange: (newValues: any) => void;
}

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

export default function Filters({onChange}: Props) {

    const [sectionfilter, setSectionFilter] = useState<string>("hot")
    const [sortfilter, setSortFilter] = useState<string>("viral") // if section is user
    const [windowfilter, setWindowFilter] = useState<string>("day") // if section is top
    const [showVirals, setShowVirals] = useState<boolean>(false) // if section is top

    useEffect(() => {
        onChange(
            {
                section: sectionfilter,
                sort: sortfilter,
                window: windowfilter,
                showViral: showVirals
            }
        )
    },[sectionfilter, sortfilter, windowfilter, showVirals])

    return (
        <>
            <div className="row p-3">
                <div className="col-3">
                    <label className="container">Show Viral
                        <input type="checkbox" onChange={e => {setShowVirals(e.target.checked)}}/>
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div className="col-9 flex jc-flex_end select_list">
                    <div>
                        <Select
                            options={sectionOptions}
                            defaultValue={sectionOptions.find((option) => option.value === 'hot')}
                            onChange={(selectedOption: OptionType | null) => {
                                setSectionFilter(selectedOption?.value ?? "hot");
                            }}
                        />
                    </div>
                    {sectionfilter == "user" && (
                        <div>
                            <Select
                                options={sortOptions}
                                defaultValue={sortOptions.find((option) => option.value === 'viral')}
                                onChange={(selectedOption: OptionType | null) => {
                                    setSortFilter(selectedOption?.value ?? "viral");
                                }}
                            />
                        </div>
                    )}
                    {sectionfilter == "top" && (
                        <div>
                            <Select
                                options={windowOptions}
                                defaultValue={windowOptions.find((option) => option.value === 'day')}
                                onChange={(selectedOption: OptionType | null) => {
                                    setWindowFilter(selectedOption?.value ?? "day");
                                }}
                            />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}