import React, { useState } from 'react'
import {from} from '../../data.json'
import Footer from '../Footer'
export default function From(props) {
    const [userFrom,setUserFrom] = useState('')
    const [user,setUser] = useState('')
    const selected = (urfrom)=>{
        setUserFrom(urfrom.id)
    }
    const stepChange = ste =>{
        props.nextStep(ste)
    }
    const search = ev =>{
        console.log(ev)
    }
    const SuggestCard = (props)=>{
        return <>
           <div className={userFrom == props.data.id ? 'card-suggestion card-selected':'card-suggestion'} onClick={()=>selected(props.data)}>

                <div className='from-country'>
                {
                    props.data.country
                }
                </div>
                <hr className="hr-width"></hr>
                <div>
                {props.data.name}
                </div>
                <hr className="hr-width"></hr>
                <div>

                </div>
           </div>
        </>
    }
    
    return (
        <div>
             <label id="userName">Name  </label>
            <input type="text" id="fromInputUser" onChange={e=>setUser(e.target.value)}/>
            <label id="from">Going from  </label>
            <input type="text"  id="fromInput" onChange={e=>search(e.target.value)}/>
            <div className="suggest">
                    suggestions
                    
                </div>
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
