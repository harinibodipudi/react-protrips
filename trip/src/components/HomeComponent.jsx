import React, { Component } from 'react'

export default class HomeTrip extends Component {
    constructor() {
        super()
        this.state = {
            totalnumberoftrips: 4
        }
    }
    render() {
        return (
            <div>
                {this.state.totalnumberoftrips}
            </div>
        )
    }
}
