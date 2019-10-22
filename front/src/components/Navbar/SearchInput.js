import React from "react";
import styled, {css} from 'styled-components';

const SearchInput = () => {
    const StyledInput = styled.input`
    height: 80%;
    width: 25rem;
    margin: auto 0.5rem auto 0.5rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 1.3rem;
    color: dimgray;

    &:focus {
        outline: none;
    }
`;

    return (
            <StyledInput className='SearchInput' type="text" placeholder="지역을 검색하세요."/>
    )
}

export default SearchInput;