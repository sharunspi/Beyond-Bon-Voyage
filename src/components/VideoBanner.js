import React from 'react'
import videosource from '../assets/space.mp4'
const year = new Date()
export default function VideoBanner() {
    return (
        <div>
           <video  loop autoPlay muted className='videoBackground'>
               <source src={videosource} type='video/mp4'/>
               Sorry you are from {year.getDate()}
           </video>
        </div>
    )
}
