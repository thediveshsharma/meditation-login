import React from "react";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as TrendingIcon } from "../../assets/icons/trending.svg";
import { ReactComponent as SubsIcon } from "../../assets/icons/subscriptions.svg";
import { ReactComponent as LibraryIcon } from "../../assets/icons/library.svg";

const MiniSidebar = ({ children }) => {
  return (
    <>
      <div className="MiniSidebar">
        <div className="SidebarList">
          <div className="SidebarItem">
            <span className="leftIcon">
              <HomeIcon />
            </span>
            <span className="text">Home </span>
          </div>

          <div className="SidebarItem">
            <span className="leftIcon">
              <TrendingIcon />
            </span>
            <span className="text">Trending </span>
          </div>
          <div className="SidebarItem">
            <span className="leftIcon">
              <SubsIcon />
            </span>
            <span className="text">Subscriptions </span>
          </div>
        </div>

        <div className="SidebarList SL-Two">
          <div className="SidebarItem">
            <span className="leftIcon">
              <LibraryIcon />
            </span>
            <span className="text">Library </span>
          </div>
        </div>
      </div>
      {children}
    </>
  );
};

export default MiniSidebar;
