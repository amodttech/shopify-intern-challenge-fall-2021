import React from 'react'

function Header({searchTerm, setSearchTerm, omdbSearch}) {

    function handleSearch(e){
        setSearchTerm(e.target.value)
        omdbSearch()
    }
    
    return (
        <div className="header-container component-box">
            <h3>Movie Title</h3>
            <input type="text" value={searchTerm} onChange={(e)=>handleSearch(e)}></input>
        </div>
    )
}

export default Header
