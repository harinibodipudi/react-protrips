import React, { Component } from 'react'
export default class AddTrips extends Component {
    constructor() {
        super()
        this.state = {

            place: '',
            date: null,
            type: '',
            listOfPlaces: []
        }
    }
    myChangeHandler = (e) => {
        this.setState({
            place: e.target.value
        })
    }
    myChangeDateHandler = (e) => {
        this.setState({
            date: e.target.value
        })
    }
    handleChangetype = (e) => {
        this.setState({
            type: e.target.value
        })
    }
    displaycontent = () => {
        return (
            <form onSubmit={this.mySubmitHandler}>
                <p>Enter place:</p>
                <input
                    type='text'
                    onChange={this.myChangeHandler} />
                <p>Date</p>
                <input type="date" onChange={this.myChangeDateHandler} />
                <p>Type</p>
                <select value={this.state.value} onChange={this.handleChangetype}>
                    <option value="trek">trek</option>
                    <option value="climb">climb</option>
                    <option value="boat">boat</option>
                </select>
                <input type='submit' />
            </form>
        )
    }
    displaylist = () => {

    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        this.setState({
            listOfPlaces: this.state.listOfPlaces.concat({ place: this.state.place, date: this.state.date, type: this.state.type })
        })
    }
    render() {
        return (
            <div>
                {this.displaycontent}
            </div>
        )
    }
}
