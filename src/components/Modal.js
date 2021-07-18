import React, { useEffect,useRef } from 'react'
import ticket from '../assets/images/ticket.png'
import party from 'party-js'
let image
export default function Modal(props) {
    useEffect(()=>{
        party.confetti(document.getElementById('ticket-modal'))
    },[])
    return (
        <div className="modal" id="ticket-modal">
            <div className="name">{props.name}</div>
            <div className="starting-location"> {props.fromLoc}</div>
            <div className="vehicle-po">{props.vehicleIs}</div>
            <div className="endinglocation">{props.toLoc}</div>
            <div className="seatNo">{props.seatNumber}</div>
            <img  src={ticket} className="ticket"/>
        </div>
    )
}
