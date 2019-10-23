import React, {useState} from 'react';
import styled from 'styled-components';
import logo from './airbnb.svg';
import SearchBar from './SearchBar';
import UserInfo from './UserInfo';
import OptionalFilterBtn from './OptionalFilterBtn';

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
`;

const Navbar = () => {
    return (
        <NavbarContainer>
            <StyledNavbar className='navbar'>
                <StyledLogo className='logo' src={logo}/>
                <SearchBar/>
                <UserInfo/>
            </StyledNavbar>
            <StyledOptionalFilters>
                <OptionalFilterBtn name='가격'/>
                <OptionalFilterBtn name='숙소 유형'/>
                <OptionalFilterBtn name='필터 추가하기'/>
            </StyledOptionalFilters>

        </NavbarContainer>
    );
};


export default Navbar;