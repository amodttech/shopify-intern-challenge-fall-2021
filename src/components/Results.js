import React from 'react'
import ResultListItem from './ResultListItem'

function Results({searchTerm}) {

    const flims = [
        {title: "Rambo", year: 1999},
        {title: "Hey Ram", year: 2000},
        {title: "Ram Dass, Going Home", year: 2007},
    ]

    const listItems = flims.map(item => 
        <ResultListItem title={item.title} year={item.year} />
        )

    return (
        <div className="results-container component-box">
            <h3>Results for "{searchTerm}"</h3>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default Results
