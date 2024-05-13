import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllVideos } from '../features/auth/videoSlice';
import Video from '../components/Video';

function VideoGrid() {
  const dispatch = useDispatch();
  const videos = useSelector(state => state.video?.data);

useEffect(() => {
  dispatch(getAllVideos())
}, [dispatch])

console.log(videos)
  return ( 
    <div className='ml-2 text-white mt-20 sm:ml-56 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-x-4 gap-y-4 p-2 '>
      {videos?.map((video) => {
        return <Video {...video}></Video>
      })}
    </div>
  );
}

export default VideoGrid;
