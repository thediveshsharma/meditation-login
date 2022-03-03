import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";

import Navbar from "../components/Navbars/Navbar";
import Sidebar from "../components/Navbars/Sidebar";

const DesktopContainer = ({ children, clx }) => {
  const { sidebarState } = useSelector((state) => state.setting);

  console.log({ sidebarState });
  return (
    <>
      <Navbar />
      <Sidebar toggle={sidebarState.isOpen} />
      <div className={`content ${clx}`}>{children}</div>
    </>
  );
};

export default DesktopContainer;

DesktopContainer.defaultProps = {
  clx: "",
};

DesktopContainer.propTypes = {
  children: PropTypes.node.isRequired,
  clx: PropTypes.string,
};
