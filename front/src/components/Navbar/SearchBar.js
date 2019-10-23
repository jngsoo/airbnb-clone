import React, {useState} from "react";
import calendarIcon from './calendar.svg';
import guestsIcon from './guests.svg'
import styled from 'styled-components';
import SearchInput from './SearchInput';
import OptionalSearchBtn from "./OptionalSearchBtn";
import ModalCalendar from "./ModalCalendar";
import ModalGuests from "./ModalGuests";

const StyledDiv = styled.div`
        display: flex;
        border: solid 0.05rem lightgray;
        box-shadow: 0.05rem 0.05rem 0.2rem 0.05rem gray;
        border-radius: 0.5rem;
        margin: auto auto auto 2rem;
        height: 3rem;
        min-width: 40rem;
`;

const SearchBar = () => {
    const [calendarPopState, setCalendarPopState] = useState(false);
    const [guestsPopState, setGuestsPopState] = useState(false);
    const [guestsTotal, setGuestsTotal] = useState(0);
    const [adultCount, setAdultCount] = useState(0);
    const [childrenCount, setChildrenCount] = useState(0);
    const [infantCount, setInfantCount] = useState(0);
    const counter = {
        adult : {count:adultCount, setCount:setAdultCount},
        children: {count:childrenCount, setCount:setChildrenCount},
        infant: {count:infantCount, setCount:setInfantCount}
    };

    const popCalendar = () => {
        if (guestsPopState) setGuestsPopState(!guestsPopState);
        setCalendarPopState(!calendarPopState);
    };
    const popGuests = () => {
        if (calendarPopState) setCalendarPopState(!calendarPopState);
        setGuestsPopState(!guestsPopState)
    };
    const updateGuestsTotal = (increase, isKid) => {
        setGuestsTotal(guestsTotal + (increase ? 1 : -1));
        // 유아, 어린이 추가 시 어른 없을 때 1명 자동 추가 기능
        if (increase && isKid && !adultCount) {
            console.log(counter);
            setAdultCount(adultCount + 1);
            setGuestsTotal(guestsTotal + 2);
        }
    };
    const removeTotalGuests = () => {
        setGuestsTotal(0);
        setAdultCount(0);
        setChildrenCount(0);
        setInfantCount(0);
    };

    return (
        <>
            <StyledDiv>
                <SearchInput/>
                <OptionalSearchBtn onClick={popCalendar} name="날짜" icon={calendarIcon}/>
                <OptionalSearchBtn onClick={popGuests} name={`인원 ${guestsTotal}명`} icon={guestsIcon}/>
            </StyledDiv>
            <ModalCalendar onClick={popCalendar} pop={calendarPopState}/>
            <ModalGuests counter={counter} init={removeTotalGuests} onUpdate={updateGuestsTotal} onClick={popGuests} pop={guestsPopState}/>
        </>
    )
};

export default SearchBar;