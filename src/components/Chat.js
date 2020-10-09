import React, { useState } from "react";
import ChatRooms from "./ChatRooms";
import Messages from "./Messages";
export const ChatContext = React.createContext();

function Chat() {
  const [menuClicked, setMenuClicked] = useState(false);
  const [room, setRoom] = useState("");

  const RenderRooms = () => (
    <>
      <ChatContext.Provider value={{ setRoom, setMenuClicked }}>
        <ChatRooms />
      </ChatContext.Provider>
    </>
  );

  //toggele the state for the menuclicked
  const handleMenuClick = (e) => setMenuClicked((prev) => !prev);

  // if no rooms or the menu is clicked then render the <RenderRooms /> component
  if (!room || menuClicked) return <RenderRooms />;

  return (
    <div className="chatContainer">
      <div className="hamMenu" onClick={handleMenuClick}>
        <div></div>
      </div>
      <Messages room={room} />
    </div>
  );
}

export default Chat;
