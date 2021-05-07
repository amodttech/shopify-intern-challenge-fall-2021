import React from 'react'

function ResultListItem({title, year, addNomination, nominations}) {

    function isNommed(title) {
        const foundNom = nominations.filter(nom => nom.title === title)
        if (foundNom[0]){
          return true
        } else return false
    }

    return (
        <li className="result-list-item">
            {title} ({year}) 
            {isNommed(title) ? null :  <button onClick={()=> addNomination(title, year)}>Nominate</button>}
        </li>
    )
}

export default ResultListItem
