import React from 'react'

function ResultListItem({title, year, status}) {
    return (
        <li className="result-list-item">
            {title} ({year})
        </li>
    )
}

export default ResultListItem
