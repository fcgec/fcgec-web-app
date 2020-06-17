import React from 'react'

import searchBoxStyles from './searchBox.module.scss'

const SearchBox = ({ name, handleChange, reset }) => {
    return (
        <div className={searchBoxStyles.searchBox}>
            <p>Search By Name</p>
            <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                aria-label="Input to search via name"
            />
            <button
                onClick={reset}
                aria-label="Button to reset search query"
            >
                Reset
            </button>
        </div>
    )
}

export default SearchBox