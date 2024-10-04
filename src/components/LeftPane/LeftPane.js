import React from "react";
import "./leftPane.css";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";
import GroupIcon from "@mui/icons-material/Group";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import FlagIcon from "@mui/icons-material/Flag";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BuildIcon from "@mui/icons-material/Build";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function LeftPane() {
  return (
    <div className="leftPaneBox">
      <div className="leftPaneContainer">
        <div className="LeftPaneMenu">
          <li className="leftPaneMenuItem">
            <MarkChatUnreadIcon className="leftpaneMenuIcon" />
            <span className="leftPaneMenutext">Messages</span>
          </li>
          <li className="leftPaneMenuItem">
            <GroupIcon className="leftpaneMenuIcon" />
            <span className="leftPaneMenutext">Group</span>
          </li>
          <li className="leftPaneMenuItem">
            <RssFeedIcon className="leftpaneMenuIcon" />
            <span className="leftPaneMenutext">Feed</span>
          </li>
          <li className="leftPaneMenuItem">
            <FlagIcon className="leftpaneMenuIcon" />
            <span className="leftPaneMenutext">Pages</span>
          </li>
          <li className="leftPaneMenuItem">
            <CalendarMonthIcon className="leftpaneMenuIcon" />
            <span className="leftPaneMenutext">Events</span>
          </li>
          <li className="leftPaneMenuItem">
            <BuildIcon className="leftpaneMenuIcon" />
            <span className="leftPaneMenutext">Settings</span>
          </li>
          <li className="leftPaneMenuItem">
            <SportsEsportsIcon className="leftpaneMenuIcon" />
            <span className="leftPaneMenutext">Games</span>
          </li>
          <li className="leftPaneMenuItem">
            <NewspaperIcon className="leftpaneMenuIcon" />
            <span className="leftPaneMenutext">News</span>
          </li>
          <li className="leftPaneMenuItem">
            <WorkOutlineIcon className="leftpaneMenuIcon" />
            <span className="leftPaneMenutext">Jobs</span>
          </li>
          <li className="leftPaneMenuItem">
            <AddShoppingCartIcon className="leftpaneMenuIcon" />
            <span className="leftPaneMenutext">Market</span>
          </li>
          <hr />
          <div className="pagesYouLiked">
            <h3>Liked Pages</h3>
          </div>
          <div className="pageList">
            <li className="pagesListItem">
              <img src="/images/1.jpg" alt="" className="pagePic" />
              <span className="PageName">Let's Code</span>
            </li>
            <li className="pagesListItem">
              <img src="/images/1.jpg" alt="" className="pagePic" />
              <span className="PageName">Let's Code</span>
            </li>
            <li className="pagesListItem">
              <img src="/images/1.jpg" alt="" className="pagePic" />
              <span className="PageName">Let's Code</span>
            </li>
            <li className="pagesListItem">
              <img src="/images/1.jpg" alt="" className="pagePic" />
              <span className="PageName">Let's Code</span>
            </li>
            <li className="pagesListItem">
              <img src="/images/1.jpg" alt="" className="pagePic" />
              <span className="PageName">Let's Code</span>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
