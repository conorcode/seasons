import React from 'react'
import getSeason from './getSeason'


// const getSeason = (lat, month) => {
//     if (month>2 && month<9) {
//         return lat>0 ? 'summer' : 'winter'
//     } else {
//         return lat>0 ? 'winter' : 'summer'
//     }
// }

var month = new Date().getMonth()


const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, month)
    return (
        <div>{season}</div>
    )
}

export default SeasonDisplay