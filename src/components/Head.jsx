import React, { useEffect, useState } from "react";
import {
  HAMBURGER_ICON,
  USER_ICON,
  YOUTUBE_LOGO,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({ [searchQuery]: json[1] }));
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
      <div className="col-span-10 px-10">
        <div>
          <input
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="z-10 absolute bg-white  py-2 px-2 w-[29.5rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.length > 0 &&
                suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="py-2 -px-10 shadow-sm hover:bg-gray-100"
                  >
                    🔍{suggestion}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex col-span-1">
        <img className="h-8" src={USER_ICON} alt="user-icon" />
      </div>
    </div>
  );
};

export default Head;
