import React,{useState} from 'react'
import From from '../components/forms/From'
import Seat from './forms/Seat'
import To from './forms/To'
import Vehicle from './forms/Vehicle'
import Modal from './Modal'
import {from} from '../data.json'
export default function MainWindow() {
    const [currentStage,setCurrentStage] = useState(1)
    const [username,setUsername] = useState('')
    const [froms,setFrom] = useState('')
    const [to,setTo] = useState('')
    const [seatNo,setSeatNo] = useState(1)
    const [vehicle,setVehicle] = useState('')
    const stepChanged = step=>{
        setCurrentStage(currentStage+1)
    }
    const reset =()=>{
        setCurrentStage(1)
    }
    const onChangeName= name =>{
        setUsername(name)
    }
    const onChangeUserFrom =fro=>{
        
        setFrom(from.filter(f=>f.id ==fro)[0].name)
    }
    const onChangeSeat = seat =>{
        setSeatNo(seat)
    }
    const onChangeSelectedVehicle = vehi =>{
        setVehicle(vehi)
    }
    const onChangeSelectedPlanet = plane =>{
        setTo(plane)
    }
    const DisplayForm = ()=>{
        switch (currentStage){
            case 1 : return <>
             <From userFromTheList={onChangeUserFrom} changedName={onChangeName} id={currentStage} nextStep={stepChanged}/>
            </>
                break;
            case 2 : return <>
                <Seat seatIs={onChangeSeat} id={currentStage} nextStep={stepChanged}/>
               </>
                break;
            case 3 : return <>
                <Vehicle selectedVehicleIs={onChangeSelectedVehicle} id={currentStage} nextStep={stepChanged}/>
               </>
                break;    
            case 4 : return <>
                <To selectedPlanet={onChangeSelectedPlanet} id={currentStage} nextStep={stepChanged}/>
               </>
                break;
            case 5 : return <>
                <Modal name={username} fromLoc={froms} toLoc={to} seatNumber={seatNo} vehicleIs={vehicle}/>
               </>
                break;    
            default : return ''
                break;
        } 
    }
    return (
  <div className="main-window">
      <div className="newticket" onClick={()=>reset()}>
            +
      </div>
            <div className='main-card'>
            <div className='container'>
                    <DisplayForm/>
            </div>
            <div className='status'>
                <div className='status-circle'>

                </div>
        </div>
         
        </div>
      
  </div>
    )
}
