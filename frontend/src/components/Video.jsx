import React from 'react'
import { timeAgo } from '../helper/formatdate';

function Video(props) {
  return (
    <div className='text-white w-100% h-fit border border-1 border-gray-500 bg-black'>
     <div className='relative'>
      <img src={props.thumbnail}></img>
      <div className='bg-black font-bold h-fit w-fit absolute right-2 bottom-2 px-2'>{props.duration}</div>
     </div>
     
     <div className='p-2'>
      <p className='font-bold'>{props.title}</p>
      <div className='flex gap-2 items-center'>
        <p className='text-gray-300'>{props.views} views</p>
        <p className='text-sm'>{timeAgo(props.createdAt)}</p>
      </div>
      
     </div>
     <div className='flex p-2'>
      <div>
        <img className='h-8 rounded-2xl' src={props.author[0].avatar}></img>
      </div>
      <div className='pl-2'>
        <p>{props.author[0].userName}</p>
      </div>
     </div>
    </div>
  )
}

export default Video