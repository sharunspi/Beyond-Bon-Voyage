import React from 'react'

export default function Footer(props) {
    const stepChange = ste =>{
        props.nextStep(ste)
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
