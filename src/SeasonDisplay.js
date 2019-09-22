import './SeasonDisplay.css'
import React from 'react'
import getSeason from './getSeason'


const seasonConfig = {
    summer: {
        text: 'let\'s hits the beach',
        iconName: 'sun'
    },
    winter: {
        text: 'it\'s chilly',
        iconName: 'snowflake'
    }
}

var month = new Date().getMonth()


const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, month)
    const { text, iconName } = seasonConfig[season]

    return (
        <div className={`season-display ${season}`}>   
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>
                {text}
            </h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    )
}

export default SeasonDisplay