import React from 'react'

function NominationListItem({key, title, year, removeNomination}) {
    
    return (
        <li className="nomination list-item" key={key}>
            {title} ({year})
            <button onClick={() => removeNomination(title)}> 👎 </button>
        </li>
    )
}

export default NominationListItem
