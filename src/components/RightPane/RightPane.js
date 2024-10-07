import React from "react";
import "./rightPane.css";

export default function RightPane() {
  return (
    <div className="RightPaneBox">
      <div className="rightPaneContainer">
        <div className="adContainer">
          <span className="sponsored">Sponsored</span>
          <img src="/images/ad.jpg" alt="" className="adImage" />
          <span className="addText">Order Now..!!</span>
        </div>
        <div className="birthDayContainer">
          <img src="/images/birthday.jpg" alt="" className="birthdayImage" />
          <span className="birthDayText">
            <b>Harry Bond</b> having birthday today..!
          </span>
        </div>
        <div className="friendList">
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/4.jfif" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Brad John</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/4.jfif" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Brad John</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/4.jfif" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Brad John</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/4.jfif" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Brad John</span>
          </li>
        </div>
      </div>
    </div>
  );
}
