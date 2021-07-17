import React,{useState} from 'react'
import From from '../components/forms/From'
export default function MainWindow() {
    const [currentStage,setCurrentStage] = useState(1)
    return (
  <div className="main-window">
            <div className='main-card'>
            <div className='container'>
                     <From/>
         
            </div>
            <div className='status'>
        
        </div>
         
        </div>

  </div>
    )
}
