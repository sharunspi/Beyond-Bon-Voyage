import React, { useState } from 'react'
import {expolanents} from '../../data.json'
import planetImage from '../../assets/images/planet.png' 
export default function To(props) {
    const [planetSelected,setPlanetSelected] = useState('')
    const stepChange = stp =>{
        props.selectedPlanet(planetSelected)
        props.nextStep(stp)
    }
    const newPlanet = pln=>{
        setPlanetSelected(pln)
    }
    const Planet =(props)=>{
        return <>
            <div onClick={()=>newPlanet(props.name)}>
                <img className={planetSelected == props.name ? "planet select-planet":"planet"} src={planetImage}/>
                <hr>
                   
                </hr>
                {props.name}
            </div>
        </>
    }
    return (
        <div>
            <label id="goingTo">Going to  </label>
            <div style={{
                display:'flex'
            }}>
            
                {
                    expolanents.map(planet=>{
                        return <Planet name={planet.name}/>
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
