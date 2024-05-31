import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import { fetchVideoById, getAllVideos, makeVideoNull } from '../features/auth/videoSlice'
import { getChannelDetails, makeDetailsnull } from '../features/auth/userSlice'
import VideoListView from '../components/VideoListView'
import {getCommentsOfVideo } from '../features/auth/commentsSlice'
import Comment from '../components/Comment'
import VideoPlayer from '../components/VideoPlayer'
import VideoInfo from '../components/VideoInfo'
import VideoList from '../components/VideoList'
import CommentsList from '../components/CommentsList'

function VideoDetails() {
    const params = useParams()
    const dispatch = useDispatch()
    const video = useSelector(state => state.video?.video)
    const channelDetails = useSelector(state => state.user.data)
    const videos = useSelector(state => state.video?.data)
    const comments = useSelector(state => state.comment)
    const [comment, setComment] = useState("")
    window.scrollTo(top)

    useEffect(() => {
        dispatch(fetchVideoById(params.videoId))
        dispatch(getChannelDetails(video?.author[0].userName))
        dispatch(getAllVideos())
        dispatch(getCommentsOfVideo(params.videoId))
        const returnEvent = () => {
          dispatch(makeVideoNull())
          // dispatch(makeDetailsnull)  
        }
        return returnEvent
    },[dispatch])
  
  // console.log(channelDetails)

  const handleComment = (e) => {
    setComment(e.target.value)
  } 
  
  console.log(comment)

  return (
    <div className='ml-2 text-white mt-20 sm:ml-56 lg:flex p-2 gap-3'>
      <div className='lg:w-2/3'>
          <VideoPlayer {...video} />
          <VideoInfo
              video = {video}
              channelDetails = {channelDetails}
          />

          {(!comments?.fetchedEmpty)
            &&
            <CommentsList {...comments}/>
          }
      </div>

      {(!videos?.empty) 
        &&
        <VideoList {...videos}/>
      }
     
    
    </div>
  )
}

export default VideoDetails