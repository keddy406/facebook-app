import React from "react";
import "./SideBar.css";
import SideBarRow from "./SideBarRow";
import HomeIcon from "@material-ui/icons/Home";
import WhatShotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibaryIcon from "@material-ui/icons/VideoLibrary";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import HistoryIcon from "@material-ui/icons/History";
function SideBar() {
  return (
    <div className="sidebar">
      <SideBarRow selected Icon={HomeIcon} title="Home" />
      <SideBarRow Icon={WhatShotIcon} title="Trending" />
      <SideBarRow Icon={SubscriptionsIcon} title="Subscription" />
      <hr />
      <SideBarRow Icon={VideoLibaryIcon} title="Libary" />
      <SideBarRow Icon={HistoryIcon} title="History" />
      <SideBarRow Icon={OndemandVideoIcon} title="Your videos" />
      <SideBarRow Icon={WatchLaterIcon} title="Watch later" />
      <SideBarRow Icon={ThumbUpAltOutlinedIcon} title="Liked video" />
      <SideBarRow Icon={ExpandMoreOutlinedIcon} title="show more" />
      <hr />
    </div>
  );
}

export default SideBar;
