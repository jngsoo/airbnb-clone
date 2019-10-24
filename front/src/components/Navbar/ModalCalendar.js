import React, {useState} from 'react';
import {DateRangePicker} from "react-date-range";
import styled from 'styled-components';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file


const StyledTransparent = styled.div`
    left: 0;
    top: 8rem;
    width: 100%;
    height: 100%;
    border: solid white 0.05rem;
    z-index: 1;
    visibility: ${props => props.pop ? 'visible' : 'hidden'}
    background-color: rgba(255, 255, 255, 0.8);
    position: fixed;
`;
const StyledModalCalendar = styled.div`
    width: 65%;
    background-color: white;
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
            <StyledTransparent pop={props.pop}>
                <StyledModalCalendar>
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
                </StyledModalCalendar>
            </StyledTransparent>
    )
};

export default ModalCalendar;