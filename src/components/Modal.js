import React from 'react'
import ticket from '../assets/images/ticket.png'
export default function Modal() {
    return (
        <div className="modal">
            <div className="name"></div>
            <div className="starting-location"></div>
            <div className="vehicle"></div>
            <div className="endinglocation"></div>
            <div className="seatNo"></div>
            <img src={ticket} className="ticket"/>
        </div>
    )
}
