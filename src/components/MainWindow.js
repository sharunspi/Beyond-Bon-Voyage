import React,{useState} from 'react'
import From from '../components/forms/From'
import Seat from './forms/Seat'
import To from './forms/To'
export default function MainWindow() {
    const [currentStage,setCurrentStage] = useState(1)

    return (
  <div className="main-window">
            <div className='main-card'>
            <div className='container'>
                     <From/>
            </div>
            <div className='status'>
                <div className='status-circle'>

                </div>
        </div>
         
        </div>

  </div>
    )
}
