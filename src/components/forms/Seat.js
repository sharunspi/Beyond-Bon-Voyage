import React from 'react'

export default function Seat(props) {
    const stepChange = stp =>{
        props.nextStep(stp)
    }
    return (
        <div>
            
               <div className="footer">
                    <button onClick={()=>stepChange(props.id)} >
                        Next
                    </button>
            </div>
        </div>
    )
}
