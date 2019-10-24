import React, {useState} from 'react';
import styled from 'styled-components';
import GuestType from "./GuestType";

const StyledTransparent = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    visibility: ${props => props.pop ? 'visible' : 'hidden'}
    position:fixed;
    z-index: 3;
`;

const StyledDiv = styled.div`
    z-index: 3;
    display: flex;
    background-color: white;
    flex-direction: column;
    position: sticky;
    height: 15rem;
    width: 20rem;
    left: 29%;
    
    
    border: solid 0.05rem lightgray;
    border-radius: 0.5rem;
    visibility: ${props => props.pop ? 'visible' : 'hidden'}
    padding: 1rem;
    
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

    const confirmGuests = () => {
        props.onClick() // ModalGuest 닫기
        const nOfAdult = props.counter.adult.count,
              nOfChildren = props.counter.children.count,
              nOfInfant = props.counter.infant.count
        alert(`성인 : ${nOfAdult}명\n
               어린이 : ${nOfChildren}명\n
               유아 : ${nOfInfant}명\n
        `)
    };

    return (
        <StyledTransparent pop={props.pop}>
            <StyledDiv pop={props.pop}>
                <GuestType counter={props.counter.adult} onUpdate={props.onUpdate} type='성인'/>
                <GuestType counter={props.counter.children} onUpdate={props.onUpdate} type='어린이'/>
                <GuestType counter={props.counter.infant} onUpdate={props.onUpdate} type='유아'/>
                <StyledBtnContainer>
                    <CancelBtn onClick={props.init}>삭제</CancelBtn>
                    <ConfirmBtn onClick={confirmGuests}>확인</ConfirmBtn>
                </StyledBtnContainer>
            </StyledDiv>
        </StyledTransparent>
    )
};

export default ModalGuests;