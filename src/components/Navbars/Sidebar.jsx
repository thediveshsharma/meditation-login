import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";
import React, { useRef } from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as HistoryIcon } from "../../assets/icons/history.svg";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as LibraryIcon } from "../../assets/icons/library.svg";
import { ReactComponent as LikedVideosIcon } from "../../assets/icons/liked-videos.svg";
import { ReactComponent as SubsIcon } from "../../assets/icons/subscriptions.svg";
import { ReactComponent as TrendingIcon } from "../../assets/icons/trending.svg";
import { ReactComponent as WatchLaterIcon } from "../../assets/icons/watch-later.svg";
import { ReactComponent as YourVideosIcon } from "../../assets/icons/your-videos.svg";
import useCloseOnOutside from "../../hooks/useCloseOnOutside";
import CONST from "../../shared/CONST";
import { ReactComponent as HamIcon } from "./../../assets/icons/hamburger.svg";
import { ReactComponent as YTIcon } from "./../../assets/icons/youtube.svg";
import MiniSidebar from "./MiniSidebar";
import SidebarItem from "./SidebarItem";

const upperSidebarItems = [
  {
    path: "/",
    leftIcon: <HomeIcon />,
    text: "Home",
  },
  {
    path: "/trending",
    leftIcon: <TrendingIcon />,
    text: "Trending",
  },
  {
    path: "/subscriptions",
    leftIcon: <SubsIcon />,
    text: "Subscriptions",
  },
];

const lowerSidebarItems = [
  {
    path: "/library",
    leftIcon: <LibraryIcon />,
    text: "Library",
  },
  {
    path: "/history",
    leftIcon: <HistoryIcon />,
    text: "History",
  },
  {
    path: "/your-videos",
    leftIcon: <YourVideosIcon />,
    text: "Your videos",
  },
  {
    path: "/watch-later",
    leftIcon: <WatchLaterIcon />,
    text: "Watch later",
  },
  {
    path: "/liked-videos",
    leftIcon: <LikedVideosIcon />,
    text: "Liked videos",
  },
];

const Sidebar = ({ toggle, onClose }) => {
  const { innerWidth: width } = window;
  const sidebarRef = useRef();

  useCloseOnOutside(sidebarRef, () => {
    if (width < CONST.BREAKPOINTS.MOBILE) {
      onClose();
    }
  });

  return (
    <>
      <AnimatePresence>
        {toggle && (
          <motion.div
            animate={{ x: 0 }}
            initial={{ x: "-20vw" }}
            transition={{
              ease: "easeOut",
              duration: width < 1190 ? 0.2 : 0,
            }}
            exit={{ x: "-20vw" }}
            className="Sidebar"
            ref={sidebarRef}
          >
            <div className="Sidebar_header">
              <span className="ham">
                <HamIcon onClick={onClose} />
              </span>
              <NavLink to="/" className="logo">
                <YTIcon />
                <span id="country-code-icon">IN</span>
              </NavLink>
            </div>

            <div className="SidebarList SL-One">
              {upperSidebarItems.map((item, index) => (
                <SidebarItem
                  path={item.path}
                  leftIcon={item.leftIcon}
                  rightIcon={item.rightIcon}
                  text={item.text}
                  key={index}
                />
              ))}
            </div>

            <div className="SidebarList SL-Two">
              {lowerSidebarItems.map((item, index) => (
                <SidebarItem
                  path={item.path}
                  leftIcon={item.leftIcon}
                  rightIcon={item.rightIcon}
                  text={item.text}
                  key={index}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* overlay */}
      {width < CONST.BREAKPOINTS.MOBILE && (
        <div className={`sidebar-overlay ${toggle ? "active" : ""}`}></div>
      )}

      {/* Mini Menu*/}
      <MiniSidebar />
    </>
  );
};

export default Sidebar;

Sidebar.defaultProps = {
  toggle: false,
  onClose: () => {},
};

Sidebar.propTypes = {
  toggle: PropTypes.bool,
  onClose: PropTypes.func,
};
