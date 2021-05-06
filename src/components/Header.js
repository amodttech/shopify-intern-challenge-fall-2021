import React from 'react'

function Header({searchTerm, setSearchTerm}) {
    return (
        <div className="header-container component-box">
            <h3>Movie Title</h3>
            <input type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}></input>
        </div>
    )
}

export default Header
