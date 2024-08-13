import React from "react";
import { HAMBURGER_ICON, USER_ICON, YOUTUBE_LOGO } from "../utils/constants";
import { IoIosSearch } from "react-icons/io";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-5 cursor-pointer"
          src={HAMBURGER_ICON}
          alt="hamburger-icon"
        />
        <a href="#">
          <img className="h-5 mx-2" src={YOUTUBE_LOGO} alt="youtube-logo" />
        </a>
      </div>
      <div className="flex col-span-10 px-10">
        <input
          className="pl-4 w-1/2 border-l border-t border-b border-gray-400 rounded-s-full"
          type="text"
          placeholder="Search"
        />
        <button className="border-l border-t border-b border-r bg-gray-200 border-gray-400 py-1 px-4 rounded-r-full">
          {<IoIosSearch />}
        </button>
      </div>
      <div className="flex col-span-1">
        <img className="h-8" src={USER_ICON} alt="user-icon" />
      </div>
    </div>
  );
};

export default Head;
