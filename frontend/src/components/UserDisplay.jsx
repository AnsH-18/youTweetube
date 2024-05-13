import React from 'react'

function UserDisplay(props) {
    console.log(props)
  return (
    <div className='flex items-center  gap-5 border border-2 border-purple-600 p-4 relative mb-5'>
        <img src={props.avatar} className='h-[60px] rounded-[25px]'></img>
        <div>
            <p className='font-bold text-lg'>{props.fullName}</p>
            <p className='text-gray-300'>@{props.userName}</p>
        </div>
        <div className='absolute right-8  h-full flex items-center'><button className='px-4 h-2/5  bg-purple-800 text-white rounded-md hover:bg-black '>Subscribe</button></div>
       
    </div>
  )
}

export default UserDisplay