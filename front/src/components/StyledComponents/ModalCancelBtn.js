import styled from "styled-components";

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

export default CancelBtn;