import React, {useState} from 'react';
import {DateRangePicker} from "react-date-range";
import styled from 'styled-components';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const StyledCalendar = styled.div`
    left: 0;
    top: 8rem;
    background-color: white;
    border: solid white 0.05rem;
    z-index: 1;
    visibility: ${props => props.pop ? 'visible' : 'hidden'}
    position: fixed;
`;
const StyledBtnContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;
const StyledBtn = styled.div`
    padding: 1rem;
    border: solid 0.05rem lightgray;
    border-radius: 0.5rem;
    margin: auto 2rem 2rem 0;
    
    &:hover {
        cursor: pointer;
        background-color: lightgray;
    }
`;

const ModalCalendar = (props) => {
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
    const confirmDateRange = () => {
        props.onClick();    // ModalCalendar 닫기
        const startDate = selectionRange.startDate.toLocaleDateString();
        const endDate = selectionRange.endDate.toLocaleDateString();
        alert(`${startDate}\n${endDate}`);
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
                <StyledBtnContainer>
                    <StyledBtn onClick={confirmDateRange}>확인</StyledBtn>
                    <StyledBtn onClick={props.onClick}>닫기</StyledBtn>
                </StyledBtnContainer>
            </StyledCalendar>
    )
};

export default ModalCalendar;