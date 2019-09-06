import React from 'react'

function BadgeList(props){
    const data = props.data
    return(
            <div className="card mb-2">
                <div className="card-body">
                    <h2>
                        {data.nom} {data.ap}
                    </h2>
                    <p>{data.dni}</p>
                    <p>{data.email}</p>
                </div>
            </div>
            )
        }


export default BadgeList