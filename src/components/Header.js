import React from 'react'

function Header({searchTerm, setSearchTerm, omdbSearch, clearResults}) {

    function handleSearch(e){
        if (e.target.value.length === 0){
            setSearchTerm("")
            clearResults()
        } else {
            setSearchTerm(e.target.value)
            omdbSearch()
        }
    }
    
    return (
        <div className="header-container component-box">
            <h3>Movie Title</h3>
            <input type="text" value={searchTerm} onChange={(e)=>handleSearch(e)}></input>
        </div>
    )
}

export default Header
