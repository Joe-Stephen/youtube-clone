import React from "react";
import {
  IconHome,
  IconDeviceTv,
  IconVideo,
  IconLivePhoto,
  IconMusic,
  IconBallFootball,
  IconDeviceGamepad2,
  IconMovie,
} from "@tabler/icons-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <>
      {isMenuOpen && (
        <div className="p-5 shadow-lg w-48">
          <ul>
            <li className="flex">
              {<IconHome stroke={2} />}
              <Link to={"/"}>Home</Link>
            </li>
            <li className="flex">{<IconDeviceTv />}Shorts</li>
            <li className="flex">{<IconVideo />}Videos</li>
            <li className="flex">{<IconLivePhoto />}Live</li>
          </ul>
          <h1 className="pt-5 font-bold">Subscriptions</h1>
          <ul>
            <li className="flex">{<IconMusic />}Music</li>
            <li className="flex">{<IconBallFootball />}Sports</li>
            <li className="flex">{<IconDeviceGamepad2 />}Gaming</li>
            <li className="flex">{<IconMovie />}Movies</li>
          </ul>
          <h1 className="pt-5 font-bold">Watch Later</h1>
          <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Sidebar;
