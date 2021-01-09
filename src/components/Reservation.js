import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

class Reservation extends Component {
   

    completeRes = () => this.props.RestaurantStore.completeRes(this.props.res.id)
    
    seatRes = () => this.props.RestaurantStore.seatRes(this.props.res.id)
    
    render() {
        let res = this.props.res
        return (
            <div>
                    <div id={res.id}>
                        <span>The reservation Name is {res.name}</span>
                        <p>for  {res.numPeople} people </p>
                        <p>The reservation is {res.completed ? 'Completed':'Not completed yet'}</p>
                        <p>The reservation is {res.seated? 'Seated' :'not seated yet'}</p>
                        <button onClick={this.completeRes} >Complete reservation</button>
                        <button onClick={this.seatRes} >Seat reservation</button>
                    </div>
            </div>
            //render the reservation data here
            //make sure you store the ID somewhere so you can find the reservation
            //use the class "conditional" to conditionally render completed reservations
            //You should hav ea complete reservation button to complete the reservation
        )
    }
}

//inject your store here
export default inject("RestaurantStore")(observer(Reservation)) 