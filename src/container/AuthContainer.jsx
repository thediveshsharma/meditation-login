import PropTypes from "prop-types";
import React from "react";

const AuthContainer = ({ children }) => {
  return (
    <>
      <div className="authContainer">
        <div className="authContent">{children}</div>
      </div>
    </>
  );
};

export default AuthContainer;

AuthContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
