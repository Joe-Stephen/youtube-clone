import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_LIST_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const key = process.env.REACT_APP_YOUTUBE_API_KEY;
  const mostPopularVideos = YOUTUBE_VIDEOS_LIST_API + key;
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const response = await fetch(mostPopularVideos);
    const data = await response.json();
    console.log("data :", data.items);
    setVideos(data.items);
  };
  console.log("videos :", videos);
  return videos.length === 0 ? null : (
    <div className="flex flex-wrap">
      {videos.map((video, index) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCard key={index} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
