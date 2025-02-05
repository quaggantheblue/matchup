"use client";

import { useState, useEffect } from "react";

export default function Sidebar() {
  const [isHovered, setIsHovered] = useState(false);

  let sidebarElement;

  useEffect(() => {
    sidebarElement = document.querySelector("#sidebar");
  });

  function expandSidebar() {
    setIsHovered(true);
  }

  function collapseSidebar() {
    setIsHovered(false);
  }
    
  return (
    <div id="sidebar" className={`h-full ${isHovered ? "w-64" : "w-16"} flex-row`} onMouseEnter={expandSidebar} onMouseLeave={collapseSidebar}>
      <ul id="sidebar-menu" className="h-full menu bg-base-200">
        <li>
          <a href="#"className="active">
            <div>O</div>
          </a>
        </li>
        <li>
          <a>
            <div>O</div>
          </a>
        </li>
        <li>
          <a>
            <div>O</div>
          </a>
        </li>
      </ul>
    </div>
  );
}