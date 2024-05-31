import React from 'react'
import { timeAgo } from '../helper/formatdate'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';


function VideoInfo(props) {
  return (
    <div className='p-3 border-[1px] rounded-lg mb-3'>
    <p className= 'text-lg font-bold'>{props.video?.title}</p>
    <div className='flex gap-2 mb-3'>
      <p>{props.video?.views} Views</p>
      <p>{timeAgo(props.video?.createdAt)}</p>
    </div>
    <div className='flex justify-between pr-5 mb-6'>
      <div className=' h-8 w-20 border border-[1px] rounded text-gray-200 hover:bg-gray-700 border-gray-100 flex items-center px-5 gap-2'>
        <ThumbUpAltOutlinedIcon fontSize='small'/>
        <p >{props.video?.likesCount}</p>
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
          <img src= {props.video?.author[0].avatar} className='h-12 rounded-[30px]'></img>
        </div>
        <div>
          <p>{props.video?.author[0].userName}</p>
          <p className='text-gray-400 text-sm'>{props.channelDetails?.subscriberCount} Suscribers</p>
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
      <p>{props.video?.description}</p>
    </div>
  </div>
  )
}

export default VideoInfo