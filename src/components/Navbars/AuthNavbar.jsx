// import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as YTIcon } from "./../../assets/icons/youtube.svg";

const AuthNavbar = () => {
  // is Authenticated
  // const isAuthenticated = false;
  return (
    <>
      <div className="AuthNavbar">
        <div className="Navbar_left">
          <Link to="/" className="logo">
            <YTIcon />
            <span id="country-code-icon">IN</span>
          </Link>
        </div>

        <div className="AuthNavbar_right">
          <div className="AuthNavbar_right_buttons">
            {/* <button>
              <MenuIcon />
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthNavbar;

AuthNavbar.propTypes = {};
