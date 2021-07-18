import React,{useState} from 'react'
import From from '../components/forms/From'
import Seat from './forms/Seat'
import To from './forms/To'
import Vehicle from './forms/Vehicle'
import Modal from './Modal'
export default function MainWindow() {
    const [currentStage,setCurrentStage] = useState(1)
    const stepChanged = step=>{
        setCurrentStage(currentStage+1)
    }

    const DisplayForm = ()=>{
        switch (currentStage){
            case 1 : return <>
             <From id={currentStage} nextStep={stepChanged}/>
            </>
                break;
            case 2 : return <>
                <Seat id={currentStage} nextStep={stepChanged}/>
               </>
                break;
            case 3 : return <>
                <Vehicle id={currentStage} nextStep={stepChanged}/>
               </>
                break;    
            case 4 : return <>
                <To id={currentStage} nextStep={stepChanged}/>
               </>
                break;
            case 5 : return <>
                <Modal/>
               </>
                break;    
            default : return ''
                break;
        } 
    }
    return (
  <div className="main-window">
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
