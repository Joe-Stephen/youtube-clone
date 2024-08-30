import React, { useEffect, useRef, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  //logic for api polling for live chat
  useEffect(() => {
    const apiPolling = setInterval(() => {
      dispatch(
        addMessage({ name: generateRandomName(), message: "Amazing content!" })
      );
    }, 500);
    return () => clearInterval(apiPolling);
  }, []);
  return (
    <>
      <div className="w-full h-[360px] mt-7 p-2 border border-black bg-slate-100 rounded-md overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages &&
            chatMessages.map((message, index) => (
              <ChatMessage
                key={index}
                name={message.name}
                message={message.message}
              />
            ))}
        </div>
      </div>
      <form
        className="flex my-2 w-full"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({ name: "Joe", message: liveMessage }));
          setLiveMessage("");
        }}
      >
        <input
          className="w-72 bg-white border border-black rounded-full p-2"
          type="text"
          placeholder="Type your message here..."
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-4 mx-2 bg-green-700 rounded-full border border-black">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
