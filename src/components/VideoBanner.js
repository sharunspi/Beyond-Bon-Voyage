import React from 'react'
import videosource from '../assets/space.mp4'

export default function VideoBanner() {
    return (
        <div>
           <video src={videosource} loop autoPlay />
        </div>
    )
}
