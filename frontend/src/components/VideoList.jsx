import React from 'react'
import VideoListView from './VideoListView'

function VideoList(props) {
    console.log(props)
  return (
    <div>
        {Object.values(props).map((video) => {
         return <VideoListView {...video}/>
        })}
    </div>
  )
}

export default VideoList