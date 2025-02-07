"use client";

import { useState, useEffect } from "react";

export default function Sidebar({ children }) {
  const [isHovered, setIsHovered] = useState(false);

  let drawerElement;

  useEffect(() => {
    drawerElement = document.querySelector("#drawer");
  });

  function expandSidebar() {
    setIsHovered(true);
  }

  function collapseSidebar() {
    setIsHovered(false);
  }
    
  return (
    <div id="drawer" className="h-full w-full grid">
      <div id="page-content" className="grid-area-1">
        {children}
      </div>
      <div id="wrapper" className="bg-right-bottom h-full w-full fixed" style={{backgroundImage: "url(https://i.imgur.com/mnl9lEp.png)",}}>
        <div id="sidebar-wrapper" className={`${isHovered ? "w-64" : "w-14"} grid-area-1 h-full menu shadow-lg bg-base-200`} onMouseEnter={expandSidebar} onMouseLeave={collapseSidebar}>
          <div id="logo" className="flex justify-start items-center mt-2 pl-3 pb-3">LG</div>
          <div className="h-px mb-4 mx-1 rounded-box bg-neutral"></div>
          <ul id="sidebar-menu" className="menu p-0 w-full">
            <li>
              <a href="#" className="active">
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
      </div>
    </div>
  );
}