import React from "react";

const VideoCard = ({ info }) => {
  console.log("info :", info);
  const { snippet, statistics } = info;
  const { title, channelTitle, publishedAt, thumbnails } = snippet;
  const { viewCount } = statistics;
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li className="font-bold">{title}</li>
        <li className="text-md text-gray-900  text-opacity-70">{channelTitle}</li>
        <li className="text-md text-gray-900  text-opacity-70">{publishedAt}</li>
        <li className="text-md text-gray-900  text-opacity-70">{viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
