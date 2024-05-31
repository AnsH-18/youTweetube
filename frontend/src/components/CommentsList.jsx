import React from 'react'
import { addComment } from '../features/auth/commentsSlice'

function CommentsList(props) {
  const handleCommentSubmit = () => {
    console.log("reached")
    dispatch(addComment({videoId: params.videoId, content: comment}))
  }
  console.log(props)
  return (
    <div className= 'border-[1px] border-gray-300 p-3 rounded-lg'>
    <div className='flex flex-col gap-3 mb-3'>
      <p className='font-bold'>{props.comments?.data.length} comments</p>
      <input placeholder='Add a Comment' className='w-full h-8 bg-inherit rounded py-3 px-3 text-sm border-[1px] border-gray-300'></input>
      <button onClick={handleCommentSubmit}>Add</button>
    </div>

    <div>
      {props.comments?.data?.map((commentinfo) => {
        return <Comment {...commentinfo}></Comment>
      })}
    </div>
  </div>
  )
}

export default CommentsList