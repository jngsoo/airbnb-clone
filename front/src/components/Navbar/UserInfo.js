import React from 'react';
import styled, {css} from 'styled-components';
import LinkBtn from './LinkBtn';

const StyledDiv = styled.div`
    width: 10rem;
    display: flex;
    border: solid 0.05rem white;
    margin: auto 2rem auto auto;
`;

const UserInfo = () => {
    return (
        <StyledDiv className='UserInfo'>
            <LinkBtn name='회원가입'/>
            <LinkBtn name='로그인'/>
        </StyledDiv>
    )
}

export default UserInfo