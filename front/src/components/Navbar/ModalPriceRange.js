import React, {useState} from 'react';
import styled from 'styled-components';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import StyledTransparent from "../StyledComponents/Transparent";
import StyledBtnContainer from "../StyledComponents/ModalBtnContainer";
import ConfirmBtn from "../StyledComponents/ModalConfirmBtn";
import CancelBtn from "../StyledComponents/ModalCancelBtn";

const StyledDiv = styled.div`
    z-index: 3;
    top: 8rem;
    left: 2rem;
    padding: 2rem;
    position: fixed;
    background-color: white;
    height: 14rem;
    width: 20rem;
    border: solid 0.05rem lightgray;
    border-radius: 0.5rem;
    visibility: ${props => props.pop ? 'visible' : 'hidden'}
`;


const AirbnbSlider = withStyles({
    root: {
        color: '#3a8589',
        height: 9,
        padding: '13px 0',
        marginTop: '3rem',
    },
    thumb: {
        height: 27,
        width: 27,
        backgroundColor: '#fff',
        border: '1px solid currentColor',
        marginTop: -12,
        marginLeft: -13,
        boxShadow: '#ebebeb 0px 2px 2px',
        '&:focus,&:hover,&$active': {
            boxShadow: '#ccc 0px 2px 3px 1px',
        },
        '& .bar': {
            // display: inline-block !important;
            height: 9,
            width: 1,
            backgroundColor: 'currentColor',
            marginLeft: 1,
            marginRight: 1,
        },
    },
    active: {},
    labelRoot: {
      size: 1000,
        width: 3000,
    },
    valueLabel: {
        left: 'calc(-50% + 4px)',
        color: '#3a8589',
        fontSize: 10,
    },
    track: {
        height: 5,
    },
    rail: {
        color: '#d8d8d8',
        opacity: 1,
        height: 3,
    },
})(Slider);

const StyledPriceBoard = styled.div`
    display: flex;
    height: 4rem;
    border: solid 0.05rem gray;
    margin: 1rem auto;
    
    & > input {
        width: 6rem;
        height: 3rem;
        font-size: 1rem;
        font-weight: bold;
        text-align: center;
        margin: auto;
        border: solid 0.05rem lightgray;
        border-radius: 0.5rem;
        color: gray;
    }   
    
`;

const ModalPriceRange = (props) => {
    const [startPrice, setStartPrice] = useState(122);
    const [endPrice, setEndPrice] = useState();

    const getPrice = (price, index) => {
        index===0 ? setStartPrice(price) : setEndPrice(price)
    };
    const confirmPriceRange = () => {
        alert(`${startPrice} ${endPrice}`);
        props.onClick()
    };
    return (
        <>
            <StyledTransparent pop={props.pop}>
                <StyledDiv pop={props.pop}>
                    <AirbnbSlider
                        defaultValue={[12200, 45320]}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="on"
                        min={8293}
                        max={154000}
                        getAriaValueText={getPrice}
                    />
                    <StyledPriceBoard>
                        <input type="text" value={`₩ ${startPrice}`}/>
                        <input type="text" value={`₩ ${endPrice}`}/>
                    </StyledPriceBoard>
                    <StyledBtnContainer>
                        <CancelBtn onClick={props.onClick}>취소</CancelBtn>
                        <ConfirmBtn onClick={confirmPriceRange}>확인</ConfirmBtn>
                    </StyledBtnContainer>
                </StyledDiv>
            </StyledTransparent>
        </>
    )
};

export default ModalPriceRange