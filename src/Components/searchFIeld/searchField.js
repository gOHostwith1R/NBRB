import React from "react";
import './searchField.css';

const SearchField = ({search}) => {
    return (
        <form>
            <label className='description-search'>Search currency</label>

            <input type='search'
            onChange={search}/>
        </form>
    )
}

export default SearchField;