import React from "react";
import './SearchInput.css';
import OptionalSearchBtn from "./OptionalSearchBtn";

const SearchInput = () => {
    return (
            <input className='SearchInput' type="text" placeholder="지역을 검색하세요."/>
    )
}

export default SearchInput;