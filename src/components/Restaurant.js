import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import ResInput from './ResInput';
import Reservation from './Reservation';

class Restaurant extends Component{

    addRes = ()=>{
        this.props.RestaurantStore.addRes( this.props.GeneralStore.name , this.props.GeneralStore.numPeople)

    } 


    render () {
        return (
            <div>
                <p>You have {this.props.RestaurantStore.openTables} open tables</p>
                <div>You have {this.props.RestaurantStore.restPopulation} people in the restaurant</div>
                <div>You have {this.props.RestaurantStore.completedTables} completed Tables in the restaurant</div>
                
                {/* Add in # of people in restaurant */}
                {/* Add in # of completed tables with id "completedTables*/}
                <ResInput/>
                <button id="addRes" onClick={this.addRes} >Add Reservation</button>
                {/* Make the Add Reservation button work */}
                <div className = "reservations">
                {/* Map reservation data to Reservation components here */}
                {this.props.RestaurantStore.reservations.map((r, i)=> <Reservation key={i} res={r} />)}
                
                </div>
            </div>
        )
    }
}

export default inject("GeneralStore", "RestaurantStore")(observer(Restaurant))