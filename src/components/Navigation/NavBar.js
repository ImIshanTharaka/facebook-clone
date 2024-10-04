import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import SettingsIcon from "@mui/icons-material/Settings";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="navBarBox">
      <div className="navBarLeft">
        <span className="logo">Facebook</span>
      </div>
      <div className="navBarCenter">
        <div className="searchbarBox">
          <SearchIcon className="searchIcon" />
          <input placeholder="Search Your Friend" className="searchInput" />
        </div>
      </div>
      <div className="navBarRight">
        <div className="navBarLinks">
          <span className="navBarLink">HomePage</span>
          <span className="navBarLink">Profile</span>
        </div>
        <div className="navbarIcons">
          <div className="navBarIcon">
            <PersonIcon />
            <span className="icontag">3</span>
          </div>
          <div className="navBarIcon">
            <MessageIcon />
            <span className="icontag">5</span>
          </div>
          <div className="navBarIcon">
            <SettingsIcon />
            <span className="icontag">1</span>
          </div>
        </div>
        <img src="/images/1.jpg" alt="" className="profilePicImage" />
      </div>
    </div>
  );
}
