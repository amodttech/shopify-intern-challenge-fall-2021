import React from 'react'

function Banner({fiveCheck}) {

    return (
            <div className="banner-container">
                {fiveCheck() ? <h4 className="title-fit component-box"> 🤜 FIVE NOMINATIONS 🤛 </h4> : null}
            </div>
    )
}

export default Banner
