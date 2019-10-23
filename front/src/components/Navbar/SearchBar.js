import React, {useState} from "react";
import calendarIcon from './calendar.svg';
import guestsIcon from './guests.svg'
import styled from 'styled-components';
import SearchInput from './SearchInput';
import OptionalSearchBtn from "./OptionalSearchBtn";
import ModalCalendar from "./ModalCalendar";
import ModalGuests from "./ModalGuests";

const SearchBar = () => {
    const [calendarPopState, setCalendarPopState] = useState(false);
    const [guestsPopState, setGuestsPopState] = useState(false);
    const StyledDiv = styled.div`
        display: flex;
        border: solid 0.05rem lightgray;
        box-shadow: 0.05rem 0.05rem 0.2rem 0.05rem gray;
        border-radius: 0.5rem;
        margin: auto auto auto 2rem;
        height: 3rem;
        min-width: 40rem;
`;

    const popCalendar = () => {
        if (guestsPopState) setGuestsPopState(!guestsPopState);
        setCalendarPopState(!calendarPopState);
    };
    const popGuests = () => {
        if (calendarPopState) setCalendarPopState(!calendarPopState);
        setGuestsPopState(!guestsPopState)
    };

    return (
        <>
            <StyledDiv>
                <SearchInput/>
                <OptionalSearchBtn onClick={popCalendar} name="날짜" icon={calendarIcon}/>
                <OptionalSearchBtn onClick={popGuests} name="인원" icon={guestsIcon}/>
            </StyledDiv>
            <ModalCalendar onClick={popCalendar} pop={calendarPopState}/>
            <ModalGuests onClick={popGuests} pop={guestsPopState}/>
        </>
    )
};

export default SearchBar;