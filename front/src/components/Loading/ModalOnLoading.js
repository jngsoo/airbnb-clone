import React from 'react';
import styled from 'styled-components';
import ReactLoading from 'react-loading';
import StyledTransparent from "../StyledComponents/Transparent";

const StyledCentering = styled.div`
    width: 20%;
    height: 20%;
    position: fixed;
    left: 50%;
    top: 50%;
`;

const ModalOnLoading = ({ type, color }) => (
    <StyledTransparent pop={true}>
        <StyledCentering>
            <ReactLoading type={type} color={color} height={'20%'} width={'20%'} />
        </StyledCentering>
    </StyledTransparent>
);

export default ModalOnLoading;