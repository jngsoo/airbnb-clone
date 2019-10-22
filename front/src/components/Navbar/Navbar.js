import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import logo from './airbnb.svg';
import SearchBar from './SearchBar';
import UserInfo from './UserInfo';

const StyledNavbar = styled.div`
    font-family: 'Nanum Gothic', sans-serif;
    display: flex;
    border-bottom: solid 0.05rem lightgray;
    height: 5rem;
`;

const StyledLogo = styled.img`
    float: left;
    margin: auto 0 auto 2rem;
    width: 2rem;
    height: 2rem;
`;

const Navbar = () => {
    const [total, setTotal] = useState(0);

    const setTotalHandler = () => {
        setTotal(total + 1)
    };

    return (
        <StyledNavbar className='navbar'>
            <StyledLogo className='logo' src={logo}/>
            <SearchBar/>
            <UserInfo/>


            {/*<p>총합 {total}</p>*/}
            {/*<AirbnbChild onUpdate={setTotalHandler} type={'성인'}/>*/}
            {/*<AirbnbChild onUpdate={setTotalHandler} type={'어린이'}/>*/}
            {/*<AirbnbChild onUpdate={setTotalHandler} type={'유아'}/>*/}
        </StyledNavbar>
    );
};



const AirbnbChild = (props) => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <div><p onClick={() => {
                setCount(count + 1);
                props.onUpdate();
            }}>{props.type}</p><span>{count}</span></div>
        </div>
    );
};

export default Navbar;