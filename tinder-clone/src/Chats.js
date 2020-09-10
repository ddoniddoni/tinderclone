import React from "react";
import "./Chats.css";
import Chat from "./Chat";

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="IU"
        message="Omg you too? 👍👍"
        timestamp="1 seconds ago"
        profilePic="https://i.pinimg.com/originals/0b/2f/8a/0b2f8a51314ab1ebe0505aee843a33b1.jpg"
      />
      <Chat
        name="Irene"
        message="Hello 🥳"
        timestamp="35 minutes ago"
        profilePic="https://i.pinimg.com/originals/bc/b4/6b/bcb46b6de990357e553679a33b93eb9a.jpg"
      />
      <Chat
        name="Kim"
        message="What aru u doing?"
        timestamp="2 days ago"
        profilePic="https://i.pinimg.com/originals/f0/1e/03/f01e03560c95b82f1cb0c19f007c6854.jpg"
      />
      <Chat
        name="Yoo"
        message="Oops.. Cheer up"
        timestamp="1 week ago"
        profilePic="https://i.pinimg.com/originals/0d/11/37/0d1137dfd8c1cbdeedec5901e8672d24.jpg"
      />
    </div>
  );
};

export default Chats;
