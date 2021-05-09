import React from 'react'

function ResultListItem({title, year, url, addNomination, nominations}) {

    function isNommed(title) {
        const foundNom = nominations.filter(nom => nom.title === title)
        if (foundNom[0]){
          return true
        } else return false
    }

    return (
        <li className="result list-item">
            <a href={url} target="_blank" rel="noopener noreferrer">
                {title} ({year})</a>
                {isNommed(title) ? null :  <button onClick={()=> addNomination(title, year, url)}> 👍 </button>}
            
        </li>
    )
}

export default ResultListItem
