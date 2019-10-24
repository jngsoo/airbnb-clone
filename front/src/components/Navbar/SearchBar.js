import React, {useState} from "react";
import calendarIcon from './calendar.svg';
import guestsIcon from './guests.svg'
import styled from 'styled-components';
import SearchInput from './SearchInput';
import OptionalSearchBtn from "./OptionalSearchBtn";
import ModalCalendar from "./ModalCalendar";
import ModalGuests from "./ModalGuests";
import ModalPriceRange from './ModalPriceRange';

const StyledDiv = styled.div`
        display: flex;
        border: solid 0.05rem lightgray;
        box-shadow: 0.05rem 0.05rem 0.2rem 0.05rem gray;
        border-radius: 0.5rem;
        margin: auto auto auto 2rem;
        height: 3rem;
        min-width: 40rem;
`;

const SearchBar = (props) => {
    return (
        <>
            <StyledDiv>
                <SearchInput/>
                <OptionalSearchBtn onClick={props.popCalendar} name="날짜" icon={calendarIcon}/>
                <OptionalSearchBtn onClick={props.popGuests} name={`인원 ${props.guestsTotal}명`} icon={guestsIcon}/>
            </StyledDiv>
        </>
    )
};

export default SearchBar;