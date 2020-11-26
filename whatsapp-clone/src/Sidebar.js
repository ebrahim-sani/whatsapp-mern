import React from "react";
import App from "./App";
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="/mypic.jpg" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>

      <div className="sidebar__chats">
        <div className="sidebarChat">
          <Avatar src="git.png" />
          <div className="sidebarChat__info">
            <h2>Github Community</h2>
            <p>Thank y...</p>
          </div>
        </div>
        <div className="sidebarChat">
          <Avatar src="link.png" />
          <div className="sidebarChat__info">
            <h2>LinkedIn Community</h2>
            <p>You hav...</p>
          </div>
        </div>
        <div className="sidebarChat">
          <Avatar src="twit.png" />
          <div className="sidebarChat__info">
            <h2>Twitter Community</h2>
            <p>People sh...</p>
          </div>
        </div>

        <div className="sidebarChat">
          <Avatar src="fb.png" />
          <div className="sidebarChat__info">
            <h2>Facebook Community</h2>
            <p>What cou...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
