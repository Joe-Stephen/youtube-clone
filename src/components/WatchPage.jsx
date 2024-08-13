import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu, toggleMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import {
  YOUTUBE_WATCH_URL_POSTFIX,
  YOUTUBE_WATCH_URL_PREFIX,
  YOUTUBE_WATCH_VIDEO_URL,
} from "../utils/constants";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="px-5 ml-24 mt-7 mr-4">
      <iframe
        width="640"
        height="360"
        src={YOUTUBE_WATCH_URL_PREFIX + videoId + YOUTUBE_WATCH_URL_POSTFIX}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
