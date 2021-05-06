import React from 'react'
import ResultListItem from './ResultListItem'

function Results({searchTerm, results}) {

    const listItems = results.map(item => 
        <ResultListItem key={item.id} title={item.title} year={item.year} />
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
