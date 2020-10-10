import React from "react";
import firebase from "../library/firebase";

function Message(props) {
  const { item, userName } = props;
  const { Timestamp } = firebase.firestore;
  const { seconds, nanoseconds } = item.timeStamp;
  const currentTime = new Timestamp(seconds, nanoseconds).toDate();

  return (
    <div className={item.userName === userName ? "userMessages" : ""}>
      {item.userName}
      <p
        id={item.key}
        data-is-big={item.message.length > 100 ? true : false}
        data-username={item.userName}
      >
        {item.message}
      </p>
      <div className="timeStamp">
        {currentTime.toLocaleTimeString() +
          "  " +
          currentTime.toLocaleDateString()}
      </div>
    </div>
  );
}

export default Message;
