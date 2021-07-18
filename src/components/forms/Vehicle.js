import React from 'react'

export default function Vehicle(props) {
    const stepChange = stp =>{
        props.nextStep(stp)
    }
    return (
        <div>
            vehicle
                 <div className="footer">
                    <button onClick={()=>stepChange(props.id)} >
                        Next
                    </button>
            </div>
        </div>
    )
}
