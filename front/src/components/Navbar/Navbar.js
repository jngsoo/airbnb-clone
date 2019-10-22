import React, {useState} from 'react';
import styled from 'styled-components';
import logo from './airbnb.svg';
import SearchBar from './SearchBar';
import UserInfo from './UserInfo';
import Calendar from './Calendar';

const StyledNavbar = styled.div`
    top: 0; // IMPORTANT!
    position: sticky;
    height: 5rem;
    width: 100%;
    background-color: white;
    font-family: 'Nanum Gothic', sans-serif;
    display: flex;
    border-bottom: solid 0.05rem lightgray;
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

const Navbar = () => {
    return (
        <>
            <StyledNavbar className='navbar'>
                <StyledLogo className='logo' src={logo}/>
                <SearchBar/>
                <UserInfo/>
            </StyledNavbar>
            <Calendar/>
        </>
    );
};


export default Navbar;