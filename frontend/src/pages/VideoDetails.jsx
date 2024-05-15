import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import { fetchVideoById, getAllVideos, makeVideoNull } from '../features/auth/videoSlice'
import ReactPlayer from "react-player"
import { getChannelDetails, makeDetailsnull } from '../features/auth/userSlice'
import VideoListView from '../components/VideoListView'
import { timeAgo } from '../helper/formatdate'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';

function VideoDetails() {
    const params = useParams()
    const dispatch = useDispatch()
    const video = useSelector(state => state.video?.video)
    const channelDetails = useSelector(state => state.user.data)
    const videos = useSelector(state => state.video?.data)
    window.scrollTo(top)

    useEffect(() => {
        dispatch(fetchVideoById(params.videoId))
        dispatch(getChannelDetails(video?.author[0].userName))
        dispatch(getAllVideos())
        const returnEvent = () => {
          dispatch(makeVideoNull())
          // dispatch(makeDetailsnull)  
        }
        return returnEvent
    },[dispatch])
  
  console.log(channelDetails)

  return (
    <div className='ml-2 text-white mt-20 sm:ml-56 lg:flex p-2 gap-3'>
      <div className='lg:w-2/3'>
        <ReactPlayer url={video?.videoFile}  width="640" height="480" controls></ReactPlayer>
        <div className='p-3 border-[1px] rounded-lg'>
          <p className= 'text-lg font-bold'>{video?.title}</p>
          <div className='flex gap-2 mb-3'>
            <p>{video?.views} Views</p>
            <p>{timeAgo(video?.createdAt)}</p>
          </div>
          <div className='flex justify-between pr-5 mb-6'>
            <div className=' h-8 w-20 border border-[1px] rounded text-gray-200 hover:bg-gray-700 border-gray-100 flex items-center px-5 gap-2'>
              <ThumbUpAltOutlinedIcon fontSize='small'/>
              <p >{video?.likesCount}</p>
            </div>
            <div>
              <button className='flex gap-2 bg-white text-black h-8 items-center px-3 rounded-lg'>
               <CreateNewFolderOutlinedIcon/>
               <p>Save</p>
              </button>
            </div>
          </div>
          <div className= 'flex justify-between pr-5 mb-5 '>
            <div className='flex gap-3'>
              <div>
                <img src= {video?.author[0].avatar} className='h-12 rounded-[30px]'></img>
              </div>
              <div>
                <p>{video?.author[0].userName}</p>
                <p className='text-gray-400 text-sm'>{channelDetails?.subscriberCount} Suscribers</p>
              </div>
            </div>
            <div>
              <button className='flex gap-2 bg-purple-500 text-black h-10 px-3 items-center font-bold'>
                <PersonAddOutlinedIcon/>
                <p>Subscribe</p>
              </button>
            </div>
          </div>
          <div className='border-t-[1px] border-gray-400 py-3 px-3'>
            <p>{video?.description}</p>
          </div>
        </div>
        
       
        </div>
      <div>
        {videos.map((video) => [
          <VideoListView {...video}/>
        ])}
      </div>
       
     
    </div>
  )
}

export default VideoDetails