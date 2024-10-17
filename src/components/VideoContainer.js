import React, { useEffect } from 'react'
import {YOUTUBE_VIDEO_API} from '../utils/constants';


const VideoContainer = () => {

  useEffect(() =>{
    getVideos();
  },[])

  const getVideos =async () =>{
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    console.log(json)
  }
  return (
    <div>VideoContainer</div>
  )
}

export default VideoContainer