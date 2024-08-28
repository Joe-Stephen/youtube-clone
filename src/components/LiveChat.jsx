import React, { useEffect, useRef, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  //logic for api polling for live chat
  useEffect(() => {
    const apiPolling = setInterval(() => {
      dispatch(
        addMessage({ name: generateRandomName(), message: "Amazing content!" })
      );
    }, 1000);
    return () => clearInterval(apiPolling);
  }, []);

  return (
    <div className="w-full h-[360px] mt-7 p-2 border border-black bg-slate-100 rounded-md overflow-y-scroll flex flex-col-reverse">
      {chatMessages &&
        chatMessages.map((message, index) => (
          <ChatMessage
            key={index}
            name={message.name}
            message={message.message}
          />
        ))}
    </div>
  );
};

export default LiveChat;
