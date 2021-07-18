import React from 'react'
import {from} from '../../data.json'
import Footer from '../Footer'
export default function From(props) {
    const stepChange = ste =>{
        props.nextStep(ste)
    }
    const SuggestCard = (props)=>{
        return <>
           <div className='card-suggestion'>
                <div className='from-country'>
                {
                    props.data.country
                }
                </div>
                <div>
                {props.data.name}
                </div>
           </div>
        </>
    }
    
    return (
        <div>
            <label id="from">Going from  </label>
            <input type="text" id="fromInput"/>
            <div id="suggestions" className="suggestions">
                {
                    from.map((card,index)=>
                        <SuggestCard key={index} data={card}/>
                        )
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
