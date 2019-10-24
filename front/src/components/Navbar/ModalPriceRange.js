import React from 'react';
import styled from 'styled-components';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

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
    top: 8rem;
    left: 2rem;
    padding: 2rem;
    position: fixed;
    background-color: white;
    height: 10rem;
    width: 15rem;
    border: solid 0.05rem lightgray;
    border-radius: 0.5rem;
    visibility: ${props => props.pop ? 'visible' : 'hidden'}
`;
const StyledBtnContainer = styled.div`
    display: flex;
    justify-content: flex-end;
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

const ModalPriceRange = (props) => {
    const setPriceRange = (value, index) => {
        console.log(value, index)
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
                        getAriaValueText={setPriceRange}
                    />
                </StyledDiv>
            </StyledTransparent>
        </>
    )
};

export default ModalPriceRange