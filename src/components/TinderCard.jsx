import React from 'react'

function TinderCard() {
    return (
        <div className="tinderCard">
            <div>
                <h3>{props.name}</h3>
            </div>
            <div>
                <img src={props.link} alt=""/>
            </div>
        </div>
    )
}

export default TinderCard
