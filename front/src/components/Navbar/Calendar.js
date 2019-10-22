import React, {useState} from 'react';
import {DateRangePicker} from "react-date-range";
import styled from 'styled-components';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const StyledCalendar = styled.div`
    top: 5rem;
    z-index: 3;
    visibility: ${props => props.pop ? 'visible' : 'hidden'}
    position: fixed;
`;

const Calendar = () => {
    const [pop,setPop] = useState(true);
    const [selectionRange, setSelectionRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    });
    const handleSelect= (range) => {
        setSelectionRange({
            ...selectionRange,
            startDate: range.selection.startDate,
            endDate:  range.selection.endDate,
            // key: 'selection'
        })
        // console.log(`${{range.selection.startDate}\n${}}`)
    };

    return (
            <StyledCalendar pop={false}>
                <DateRangePicker
                    ranges={[selectionRange]}
                    onChange={handleSelect}
                    direction='horizontal'
                    months={2}
                    moveRangeOnFirstSelection={true}
                    color={'black'}
                />
                <div>
                    {'확인'}
                </div>
            </StyledCalendar>
    )
};

export default Calendar;