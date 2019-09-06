import React from 'react'

class BadgeItem extends React.Component {
    
     
    render(){
        const data = this.props.data
        console.log(data)
    
        return(
            <div className="container">
                <div >
                    <h1>{data.nom} {data.ap}</h1>
                    <p>{data.dni}</p>
                    <p>{data.email}</p>
                </div>
            </div>
        )
    }
}

export default BadgeItem