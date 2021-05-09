import React from 'react'

function NominationListItem({key, title, year, url, removeNomination}) {

    return (
        <li className="nomination list-item" key={key}>
            <a href={url} target="_blank" rel="noopener noreferrer">
                {title} ({year})</a>
            <button onClick={() => removeNomination(title)}> 👎 </button>
        </li>
    )
}

export default NominationListItem
