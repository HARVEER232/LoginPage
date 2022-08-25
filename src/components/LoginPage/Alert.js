import React, { Component } from 'react'

export class Alert extends Component {
    render() {
        return (
            <div>
                {this.props.har ? alert("Hey this is me") : ""}
            </div>
        )
    }
}

export default Alert
