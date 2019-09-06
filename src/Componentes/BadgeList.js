import React from 'react'
import BadgeItem from './BadgeItem'

function BadgeList(props) {
    const items = props.items
    const ultimo = items[items.length - 1]
    console.log("asd", ultimo)

    if (items.length === 0){return (
        <h1>No se agrego nada</h1>
    )}
    else {return (
        <div className="row">
            <ul>
                {items.map(badge => {
                    return(<li key ={badge.dni} className="mb-3"><BadgeItem data={badge} /></li>)
                })}
                          
                
            </ul>
        </div>
    )}
    

}


export default BadgeList