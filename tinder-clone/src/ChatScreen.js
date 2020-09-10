import React, { useState } from "react";
import "./ChatScreen.css";
import { Avatar } from "@material-ui/core";

const ChatScreen = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "IU",
      image:
        "https://i.pinimg.com/originals/0b/2f/8a/0b2f8a51314ab1ebe0505aee843a33b1.jpg",
      message: "Omg you too?",
    },
    {
      name: "IU",
      image:
        "https://i.pinimg.com/originals/0b/2f/8a/0b2f8a51314ab1ebe0505aee843a33b1.jpg",
      message: "Hows it going!",
    },
    {
      message: "Hi! How r u IU?",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">YOU MATCHED WITH IU ON 10/09/20</p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
      <div>
        <form className="chatScreen__input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="chatScreen__inputField"
            placeholder="Type a message..."
            type="text"
          />
          <button
            onClick={handleSend}
            type="submit"
            className="chatScreen__inputButton"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatScreen;
