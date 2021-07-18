import React, { useState } from 'react'
import {from} from '../../data.json'
import Footer from '../Footer'
export default function From(props) {
    const [userFrom,setUserFrom] = useState('')
    const [user,setUser] = useState('')
    const [showNextBtn,setShowNextBtn] = useState(false)
    const selected = (urfrom)=>{
        setUserFrom(urfrom.id)
        setShowNextBtn(true)
    }
    const stepChange = ste =>{
        props.changedName(user)
        props.userFromTheList(userFrom)
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
    const usernameChange = name =>{
        setUser(name)
        
    }
    return (
        <div>
             <label id="userName">Name  </label>
            <input type="text" onChange={e=>{
                usernameChange(e.target.value)
                console.log(e.target.value)
            }}/>
            <label id="from">Going from  </label>
    
            <div id="suggestions" className="suggestions">
            
                {
                    from.map((card,index)=>
                        <SuggestCard key={index} data={card}/>
                        )
                }
            </div>
            <div className="footer">
                    <button disabled={!showNextBtn} onClick={()=>stepChange(props.id)} >
                        Next
                    </button>
            </div>
            
        </div>
    )
}
