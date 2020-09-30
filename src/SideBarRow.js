import React from "react";
import "./SideBarRow.css";

function SideBarRow({ title, Icon, selected }) {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
      <Icon className="sidebarRow_icon" />
      <h2 className="sidebarRow_title">{title}</h2>
    </div>
  );
}

export default SideBarRow;
