import React from 'react'

function NominationListItem({title, year, removeNomination}) {
    
    return (
        <li className="nomination-list-item">
            {title} ({year})
            <button onClick={() => removeNomination(title)}>Unnominate</button>
        </li>
    )
}

export default NominationListItem
