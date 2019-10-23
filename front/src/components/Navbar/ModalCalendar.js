import React, {useState} from 'react';
import {DateRangePicker} from "react-date-range";
import styled from 'styled-components';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const StyledCalendar = styled.div`
    left: 0;
    top: 5rem;
    z-index: 1;
    visibility: ${props => props.pop ? 'visible' : 'hidden'}
    position: fixed;
`;

const ModalCalendar = (props) => {
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
            <StyledCalendar pop={props.pop}>
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

export default ModalCalendar;