import React from "react";
import "./addPost.css";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LiveTvIcon from "@mui/icons-material/LiveTv";

export default function AddPost() {
  return (
    <div className="addPost">
      <div className="addPostContainer">
        <div className="addPostTop">
          <img src="/images/1.jpg" alt="" className="addPostPic" />
          <input
            placeholder="What's in your mind?"
            type="text"
            className="addPostInput"
          />
        </div>
        <hr className="postHr"></hr>
        <div className="addPostBottom">
          <div className="addPostOptions">
            <div className="addPostOption">
              <PhotoSizeSelectActualIcon
                htmlColor="orange"
                className="addPhoto"
              />
              <span className="addPhotoOptionText">Add Photo/Video</span>
            </div>
            <div className="addPostOption">
              <AddLocationAltIcon htmlColor="red" className="addLocation" />
              <span className="addPhotoOptionText">Add Location</span>
            </div>
            <div className="addPostOption">
              <LocalOfferIcon htmlColor="blue" className="addtag" />
              <span className="addPhotoOptionText">Add Tag</span>
            </div>
            <div className="addPostOption">
              <LiveTvIcon htmlColor="tomato" className="goLive" />
              <span className="addPhotoOptionText">Go Live</span>
            </div>
            <button className="PostButton">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
}
