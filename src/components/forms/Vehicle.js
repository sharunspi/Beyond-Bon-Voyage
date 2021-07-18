import React, { useState } from 'react'
import {vehicles} from '../../data.json'
import rocket from '../../assets/images/rocket.png'
export default function Vehicle(props) {
    const [selectedVehicle,setSelectedVehicle] = useState('')
    const stepChange = stp =>{
        props.selectedVehicleIs(selectedVehicle)
        props.nextStep(stp)
    }
    const newVehicle =(newV)=>{
        setSelectedVehicle(newV)
    }
    const Card =(props)=>{
        return <div  onClick={()=>newVehicle(props.name)}>
            <img className={selectedVehicle == props.name ? "vehicle vehicle-selected":"vehicle"} src={rocket}/>
            <div>
                {props.name}
            </div>
        </div>
    }
    return (
        <div>
            <div>
            <label id="vehicle">Select vehicle  </label>
                {
                    vehicles.map(vehi=>{
                        return <Card name={vehi.name} />
                    })
                }
            </div>
                 <div className="footer">
                    <button onClick={()=>stepChange(props.id)} >
                        Next
                    </button>
            </div>
        </div>
    )
}
