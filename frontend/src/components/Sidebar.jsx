import React from 'react'
import { useDispatch } from 'react-redux'
import { getAllVideos } from '../features/auth/videoSlice'
import {Link, NavLink} from "react-router-dom"

function Sidebar() {
  const dispatch = useDispatch()
  return (
    <div className='fixed sm:top-0 bottom-0 left-0 right-0 mt-[70px] z-20 sm:w-56 border-gray-400 border-r-2'>
      <div className=' hidden text-white sm:flex flex-col gap-3 px-2 py-4'>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            backgroundColor: isActive
              ? "#9333EA"
              : "inherit",
          })}>
            <div className="border-2 border-gray-400 py-[5px] px-4 hover:bg-purple-600 hover:text-black">
              Home
            </div>
          </NavLink>
        <NavLink
          to="likedVideos"
          style={({ isActive }) => ({
            backgroundColor: isActive
              ? "#9333EA"
              : "inherit",
          })}>
            <div className="border-2 border-gray-400 py-[5px] px-4 hover:bg-purple-600 hover:text-black">
              Liked Videos
            </div>
          </NavLink>
        <NavLink
          to="watchHistory"
          style={({ isActive }) => ({
            backgroundColor: isActive
              ? "#9333EA"
              : "inherit",
          })}>
            <div className="border-2 border-gray-400 py-[5px] px-4 hover:bg-purple-600 hover:text-black">
              History
            </div>
          </NavLink>
        <NavLink
          to="subscribersList"
          style={({ isActive }) => ({
            backgroundColor: isActive
              ? "#9333EA"
              : "inherit",
          })}>
            <div className="border-2 border-gray-400 py-[5px] px-4 hover:bg-purple-600 hover:text-black">
              Subscribers
            </div>
          </NavLink>
       
        
      </div>
      <div className='sm:hidden h-20  bg-black flex gap-2 items-center px-2'>
        <div className='w-1/4 h-4/5 border border-1 border-gray-400'>

        </div>
        <div className='w-1/4 h-4/5 border border-1 border-gray-400'>

        </div>
        <div className='w-1/4 h-4/5 border border-1 border-gray-400'>
          
        </div>
        <div className='w-1/4 h-4/5 border border-1 border-gray-400'>

        </div>
      </div>
    </div>
    
  )
}

export default Sidebar