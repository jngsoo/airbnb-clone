import React from "react";
import './SearchBar.css';
import SearchInput from './SearchInput';
import OptionalSearchBtn from "./OptionalSearchBtn";
import calendarIcon from './calendar.svg';
import guestsIcon from './guests.svg'


const SearchBar = () => {
    return (
        <div className='SearchBar'>
            <SearchInput/>
            <OptionalSearchBtn name="날짜" icon={calendarIcon}/>
            <OptionalSearchBtn name="인원" icon={guestsIcon}/>

        </div>
    )
}

export default SearchBar;