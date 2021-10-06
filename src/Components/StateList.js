import React, { Component } from 'react'

export default class StateList extends Component {
    render(props) {
        return (
            <>
                <div className="container">
                    <span>{this.props.number}: </span>
                    <span>{this.props.stateName}</span>    
                </div>   
            </>
        )
    }
}
