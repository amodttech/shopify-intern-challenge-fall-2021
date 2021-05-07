import React from 'react'

function ResultListItem({title, year, addNomination}) {
    return (
        <li className="result-list-item">
            {title} ({year})
            <button onClick={()=> addNomination(title, year)}>Nominate</button>
        </li>
    )
}

export default ResultListItem
