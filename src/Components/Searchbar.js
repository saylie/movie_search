import React, { useState } from "react";

const Searchbar = ({onSearch}) => {
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (event) =>{
        setSearchValue(event.target.value);
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        onSearch(searchValue);
    }
    return(
        <form className="search-form" onSubmit={handleSubmit}>
            <input className="search-input" type="text" value={searchValue} onChange={handleInputChange} />
            <button className="search-button" type="submit">SEARCH</button>
        </form>
    )

}

export default Searchbar;