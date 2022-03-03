import PropTypes from "prop-types";
import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { useUserActions } from "../../hooks/useActions";
import { selectCurrentUser, selectToken } from "../../redux/selectors";
import Tooltip from "../Tooltip";
import { ReactComponent as VideoIcon } from "./../../assets/icons/add-video.svg";
import { ReactComponent as HamIcon } from "./../../assets/icons/hamburger.svg";
import { ReactComponent as MenuIcon } from "./../../assets/icons/nav-menu.svg";
import { ReactComponent as NotificationIcon } from "./../../assets/icons/notification.svg";
import { ReactComponent as ProfileIcon } from "./../../assets/icons/profile.svg";
import { ReactComponent as SearchIcon } from "./../../assets/icons/search.svg";
import { ReactComponent as SignoutIcon } from "./../../assets/icons/signout.svg";
import { ReactComponent as UploadVideoIcon } from "./../../assets/icons/upload-video.svg";
import { ReactComponent as YTIcon } from "./../../assets/icons/youtube.svg";
import SidebarItem from "./SidebarItem";

const ProfileTooltipContent = () => {
  const { logout } = useUserActions();

  const profileItems = [
    {
      onClick: logout,
      leftIcon: <SignoutIcon />,
      text: "Sign out",
    },
  ];
  return (
    <div className="ProfileTooltipContent">
      <div className="ProfileTooltipContent_header">
        <div className="ProfileTooltipContent_header_img">
          <img
            src="http://lh4.googleusercontent.com/-e0FNv7UBhFg/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnrW18DJHzG2Vfw1VrSqwJrneGu0g/s88-c-k-c0x00ffffff-no-rj-mo/photo.jpg"
            alt="avatar"
          />
        </div>
        <div className="ProfileTooltipContent_header_info">
          <p className="name">Aman Ansari</p>
          <p className="email">aman.atg001@gmail.com</p>
          <p className="googleAccount">Manage your Google Account</p>
        </div>
      </div>

      <div className="ProfileTooltipContent_body">
        {/* first list  */}
        {profileItems.map((item, index) => (
          <SidebarItem
            path={item.path}
            leftIcon={item.leftIcon}
            rightIcon={item.rightIcon}
            text={item.text}
            onClick={item.onClick}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

const VideoTooltipContent = () => {
  const items = [
    {
      onClick: () => {
        console.log("todo:upload video");
      },
      leftIcon: <UploadVideoIcon />,
      text: "Upload video",
    },
  ];
  return (
    <div className="VideoTooltipContent">
      <div className="VideoTooltipContent_body">
        {items.map((item, index) => (
          <SidebarItem
            path={item.path}
            leftIcon={item.leftIcon}
            rightIcon={item.rightIcon}
            text={item.text}
            onClick={item.onClick}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

const Navbar = ({ onMenuClick }) => {
  const user = useSelector(selectCurrentUser, shallowEqual);
  const token = useSelector(selectToken, shallowEqual);

  return (
    <>
      <div className="Navbar">
        <div className="Navbar_left">
          <span
            tabIndex={0}
            className="ham"
            onClick={onMenuClick}
            onKeyDown={() => {}}
            role="button"
          >
            <HamIcon />
          </span>
          <Link to="/" className="logo">
            <YTIcon />
            <span id="country-code-icon">IN</span>
          </Link>
        </div>
        <div className="Navbar_center">
          <div className="searchbox">
            <form>
              <div className="search-input">
                <input
                  id="search"
                  autoCapitalize="none"
                  autoComplete="off"
                  autoCorrect="off"
                  name="search_query"
                  tabIndex="0"
                  type="text"
                  spellCheck={false}
                  placeholder="Search"
                  aria-label="Search"
                  aria-haspopup={false}
                  // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
                  role="combobox"
                  aria-autocomplete="list"
                  dir="ltr"
                />
              </div>

              <button>
                <SearchIcon />
              </button>
              {/* <button>microphone</button> */}
            </form>
          </div>
        </div>
        <div className="Navbar_right">
          <div className="Navbar_right_buttons">
            {token ? (
              <>
                <Tooltip
                  arrow={false}
                  interactive
                  tooltipClass="profile"
                  placement="bottom-end"
                  trigger="click"
                  content={
                    <>
                      <VideoTooltipContent />
                    </>
                  }
                >
                  <button>
                    <VideoIcon />
                  </button>
                </Tooltip>
                {/* <button>
                  <MenuIcon />
                </button> */}

                <Tooltip
                  arrow={false}
                  interactive
                  tooltipClass="profile"
                  placement="bottom-start"
                  trigger="click"
                  content={
                    <>
                      <ProfileTooltipContent />
                    </>
                  }
                >
                  <button>
                    <span className="avatar">
                      <img
                        id="img"
                        alt="Avatar"
                        src="//lh4.googleusercontent.com/-e0FNv7UBhFg/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnrW18DJHzG2Vfw1VrSqwJrneGu0g/s88-c-k-c0x00ffffff-no-rj-mo/photo.jpg"
                      />
                    </span>
                  </button>
                </Tooltip>
              </>
            ) : (
              <>
                <button>
                  <MenuIcon />
                </button>

                <Link to="/join" className="signin-btn">
                  <span style={{ height: 24, width: 24 }}>
                    <ProfileIcon />
                  </span>
                  <span>Sign in</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

Navbar.propTypes = {
  onMenuClick: PropTypes.func.isRequired,
};
