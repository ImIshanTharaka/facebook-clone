import React from "react";
import "./post.css";

export default function Post() {
  return (
    <div className="Post">
      <div className="postContainer">
        <div className="postTop">
          <img src="/images/3.jpg" alt="" className="postImage" />
          <span className="postUserName">Hanna Lipa</span>
          <span className="postTime">5 min ago</span>
        </div>

        <div className="postCenter">
          <div className="postCaption">Hello, It's me Hanna</div>
          <img src="/images/2.jpg" alt="" className="postedImage" />
        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/images/like.webp" alt="" className="reactionPic" />
            <img src="/images/heart.webp" alt="" className="reactionPic" />
            <img src="/images/care.webp" alt="" className="reactionPic" />
            <img src="/images/wow.webp" alt="" className="reactionPic" />
            <img src="/images/haha.webp" alt="" className="reactionPic" />
            <img src="/images/sad.webp" alt="" className="reactionPic" />
            <img src="/images/angry.webp" alt="" className="reactionPic" />
            <span className="likecount">Tom and 224 Others</span>
          </div>
          <div className="postBottomRight">
            <span className="commentCount">15 Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
