import React, {useState} from "react";
import styled from 'styled-components';
import SearchInput from './SearchInput';
import OptionalSearchBtn from "./OptionalSearchBtn";
import calendarIcon from './calendar.svg';
import guestsIcon from './guests.svg'
import ModalCalendar from "./ModalCalendar";

const SearchBar = () => {
    const [popState, setPopState] = useState(false);
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
        setPopState(!popState)
    };

    return (
        <>
            <StyledDiv>
                <SearchInput/>
                <OptionalSearchBtn onClick={popCalendar} name="날짜" icon={calendarIcon}/>
                <OptionalSearchBtn name="인원" icon={guestsIcon}/>
            </StyledDiv>
            <ModalCalendar pop={popState}/>
        </>
    )
};

export default SearchBar;