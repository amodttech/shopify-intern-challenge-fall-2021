import React from 'react'
import NominationListItem from './NominationListItem'

function Nominations({nominations, removeNomination}) {

    const listItems = nominations.map(item => 
        <NominationListItem key={item.id} title={item.title} year={item.year} url={item.url} removeNomination={removeNomination}/>
        )

    return (
        <div className="nominations-container component-box">
            <h3>Nominations</h3>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default Nominations
