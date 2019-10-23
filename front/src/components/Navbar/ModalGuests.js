import React, {useState} from 'react';
import styled from 'styled-components';
import GuestType from "./GuestType";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 15rem;
    width: 20rem;
    margin-top: 5rem;
    left: 29%;
    background-color: white;
    
    border: solid 0.05rem lightgray;
    border-radius: 0.5rem;
    
    padding: 1rem;
    visibility: ${props => props.pop ? 'visible' : 'hidden'}
`;
const StyledBtnContainer = styled.div`
    display: flex;
    justify-content: space-between
    margin: auto 0;
`;
const CancelBtn = styled.div`
    display: flex;
    align-items: center; 
    font-size: 0.8rem;
    color: dimgray;
    
    &:hover{
        cursor: pointer;
        color: red;
    }
`;
const ConfirmBtn = styled.div`
    padding: 1rem;
    border: solid 0.05rem lightgray;
    border-radius: 33%;
    
    &:hover {
        cursor: pointer;
        background-color: #4058B6;
        color: white;
    }
`;
const ModalGuests = (props) => {
    return (
        <StyledDiv pop={props.pop}>
            <GuestType type='성인'/>
            <GuestType type='어린이'/>
            <GuestType type='유아'/>
            <StyledBtnContainer>
                <CancelBtn>삭제</CancelBtn>
                <ConfirmBtn>확인</ConfirmBtn>
            </StyledBtnContainer>
        </StyledDiv>
    )
};

export default ModalGuests;