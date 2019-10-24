import styled from "styled-components";
import React from 'react';

const StyledTransparent = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    visibility: ${props => props.pop ? 'visible' : 'hidden'}
    position:fixed;
    z-index: 3;
`;

export default StyledTransparent;