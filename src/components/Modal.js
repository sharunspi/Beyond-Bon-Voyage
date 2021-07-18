import React, { useEffect,useRef } from 'react'
import ticket from '../assets/images/ticket.png'
import party from 'party-js'
let image
export default function Modal() {
    useEffect(()=>{
        party.confetti(document.getElementById('ticket-modal'))
    },[])
    return (
        <div className="modal" id="ticket-modal">
            <div className="name">sharun</div>
            <div className="starting-location"> starting</div>
            <div className="vehicle-po">vehicle</div>
            <div className="endinglocation">ending</div>
            <div className="seatNo">seat</div>
            <img  src={ticket} className="ticket"/>
        </div>
    )
}
