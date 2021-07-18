import React, { useState } from 'react'
import {expolanents} from '../../data.json'
import planetImage from '../../assets/images/planet.png' 
export default function To(props) {
    const [planetSelected,setPlanetSelected] = useState('')
    const stepChange = stp =>{
        props.nextStep(stp)
    }
    const newPlanet = pln=>{
        setPlanetSelected(pln)
    }
    const Planet =(props)=>{
        return <>
            <div onClick={()=>newPlanet(props.name)}>
                <img className={planetSelected == props.name ? "planet select-planet":"planet"} src={planetImage}/>
            </div>
        </>
    }
    return (
        <div>
            <div>
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
