import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getChannelSubscribers } from '../features/auth/subscriberSlice'
import UserDisplay from '../components/UserDisplay'

function Subscribers() {
  const dispatch = useDispatch()
  const userName = useSelector(state => state.auth?.data?.userName)
  const subscriberList = useSelector(state => state.subscriber?.data)
  const userId = useSelector(state => state.auth?.data?._id)

  useEffect(() => {
    dispatch(getChannelSubscribers(userId)) 
  }, [])
  console.log(subscriberList)
  return (
    <div  className='ml-2 text-white mt-24 sm:ml-60 mr-6 '>
      <div className='mb-10 ml-5'>
        <p className='text-2xl font-bold'>{userName} Subscribers </p>
      </div>
      {subscriberList?.map((subscriber) => {
        return <UserDisplay {...subscriber}></UserDisplay>
      })}
    </div>
  )
}

export default Subscribers