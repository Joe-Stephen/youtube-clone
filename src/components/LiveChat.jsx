import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  //logic for api polling for live chat
  useEffect(() => {
    const apiPolling = setInterval(() => {
      console.log("Polling now!");
    }, 2000);
    return () => clearInterval(apiPolling);
  }, []);

  return (
    <div className="w-full h-[360px] mt-7 p-2 border border-black bg-slate-100 rounded-md overflow-scroll scrollbar-hide">
      <ChatMessage name={"Joe Stephen"} message={"Informational video"} />
    </div>
  );
};

export default LiveChat;
