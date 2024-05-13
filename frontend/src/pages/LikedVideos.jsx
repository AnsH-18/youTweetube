import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import videoSlice, { getLikedVideosByUser } from '../features/auth/videoSlice'
import Video from '../components/Video'

function LikedVideos() {
  const Videos = useSelector(state => state.video?.data)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getLikedVideosByUser())
  }, [])
  if(Videos){
    console.log(Videos)
  }
  return (
    <div className='ml-2 text-white mt-20 sm:ml-56 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-x-4 gap-y-4 p-2'>
      {Videos?.map((video) => {
        return <Video {...video}></Video>
      })}
    </div>
  )
}

export default LikedVideos