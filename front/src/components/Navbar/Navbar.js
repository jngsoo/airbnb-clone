import React, {useState} from 'react';
import styled from 'styled-components';
import logo from './airbnb.svg';
import SearchBar from './SearchBar';
import UserInfo from './UserInfo';
import OptionalFilterBtn from './OptionalFilterBtn';
import ModalCalendar from "./ModalCalendar";
import ModalGuests from "./ModalGuests";
import ModalPriceRange from "./ModalPriceRange";

const NavbarContainer = styled.div`
    display: flex;
    top: 0;
    position: sticky;
    flex-direction: column;
    border-bottom: solid 0.05rem lightgray;
`;

const StyledNavbar = styled.div`
    top: 0; // IMPORTANT!
    position: sticky;
    height: 5rem;
    width: 100%;
    background-color: white;
    font-family: 'Nanum Gothic', sans-serif;
    border-bottom: solid lightgray 0.05rem;
    display: flex;
`;

const StyledLogo = styled.img`
    float: left;
    margin: auto 0 auto 2rem;
    width: 2rem;
    height: 2rem;
    
    &:hover {
        cursor: pointer;
    }
`;
const StyledOptionalFilters = styled.div`
    display: flex;
    height: 3rem;
    background-color: white;
    padding: 0 2rem 0 2rem; 
    z-index: 0;
`;

const Navbar = () => {
    const [calendarPopState, setCalendarPopState] = useState(false);
    const [guestsPopState, setGuestsPopState] = useState(false);
    const [pricePopState, setPricePopState] = useState(false);
        const modalPriceState = {
            state: pricePopState,
            setState: setPricePopState
        };

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
        setGuestsPopState(false);
        setPricePopState(false);
        setCalendarPopState(!calendarPopState);
    };
    const popGuests = () => {
        setCalendarPopState(false);
        setPricePopState(false);
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

    const popPrice = () => {
        setCalendarPopState(false);
        setGuestsPopState(false);
        setPricePopState(!pricePopState);
    };
    return (
        <>
            <NavbarContainer>
                <StyledNavbar className='navbar'>
                    <StyledLogo className='logo' src={logo}/>
                    <SearchBar  popCalendar={popCalendar}
                                popGuests={popGuests}
                                guestsTotal={guestsTotal}
                    />
                    <UserInfo/>
                </StyledNavbar>
                <StyledOptionalFilters>
                    <OptionalFilterBtn onClick={popPrice} name='가격'/>
                    <OptionalFilterBtn name='숙소 유형'/>
                    <OptionalFilterBtn name='필터 추가하기'/>
                </StyledOptionalFilters>
            </NavbarContainer>

            <ModalCalendar onClick={popCalendar}
                           pop={calendarPopState}/>
            <ModalGuests counter={counter}
                         init={removeTotalGuests}
                         onUpdate={updateGuestsTotal}
                         onClick={popGuests}
                         pop={guestsPopState}/>
            <ModalPriceRange pop={pricePopState}
                             onClick={popPrice}
                                                />
        </>

    );
};


export default Navbar;