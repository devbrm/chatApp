import React, { useContext, useState } from "react";
import { AppContext } from "../App";

function WelcomePage() {
  const { setUserName } = useContext(AppContext);
  const [currentName, setCurrentName] = useState("");

  const handleChange = (e) => {
    if (!e.target.value.trim().length) return;
    setCurrentName(e.target.value);
  };

  const handleClick = (e) => {
    setUserName(currentName);
  };

  return (
    <div className="welcomePage">
      <h1>Welcome to the chat App</h1>
      <p>Enter your name and lets have fun together</p>
      <form>
        <input
          type="text"
          value={currentName}
          placeholder="Enter your name"
          onChange={handleChange}
        ></input>
        <button type="submit" onClick={handleClick}>
          Lets Go
        </button>
      </form>
    </div>
  );
}

export default WelcomePage;
