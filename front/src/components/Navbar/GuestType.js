import React, {useState} from 'react';
import styled from 'styled-components';

const Num = styled.div`
    margin: auto 1rem;
`;
const GuestType = (props) => {
    const StyledDiv = styled.div`
        display: flex;
        justify-content: space-between;
        color: dimgray;
    `;
    const CtrlPanel = styled.div`
        display: flex;
        align-items: center;
    `;
    const NumCtrlBtn = styled.div`
        width: 1rem;
        height: 1rem;
        text-align: center;
        padding: 0.7rem;
        border: 0.1rem solid;
        border-radius: 50%;
        
        &:hover {
            cursor: pointer;
        }

        &.decreaseBtn {
            border-color: ${props.counter.count > 0 ? '#1a783e' : 'gray'};
            color: ${props.counter.count > 0 ? '#1a783e' : 'gray'};
        }
        &.increaseBtn {
            border-color: ${props.counter.count < 10 ? '#1a783e' : 'gray'};
            color: ${props.counter.count < 10 ? '#1a783e' : 'gray'};
        }
    `;
    let isKid = (props.type !== '성인');
    const increaseGuest = () => {
        if (props.counter.count >= 9) return;
        props.onUpdate(true, isKid);
        props.counter.setCount(props.counter.count + 1);
    };

    const decreaseGuest = () => {
        if (props.counter.count < 1) return;
        props.counter.setCount(props.counter.count - 1);
        props.onUpdate(false);
    };

    return (
        <StyledDiv>
            <p>{props.type}</p>
            <CtrlPanel>
                <NumCtrlBtn className="decreaseBtn" onClick={decreaseGuest}>-</NumCtrlBtn>
                <Num>{props.counter.count}+</Num>
                <NumCtrlBtn className="increaseBtn" onClick={increaseGuest}>+</NumCtrlBtn>
            </CtrlPanel>
        </StyledDiv>
    )
};

export default GuestType;