import PropTypes from "prop-types";
import React from "react";
import { MdAccountCircle, MdAddCircle } from "react-icons/lib/md";

const Sign = ({ type, onChange }) => (
  <div
    onClick={onChange}
    tabIndex="0"
    role="button"
    onKeyPress={onChange}
    className={type === "signIn" ? "Sign signIn" : "Sign signUp"}
  >
    <div className="center">
      {type === "signIn" ? (
        <>
          <MdAccountCircle className="icons" />
          <p>Sign in</p>
        </>
      ) : (
        <>
          <MdAddCircle className="icons" />
          <p>Sign in</p>
        </>
      )}
    </div>
  </div>
);

Sign.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
};

export default Sign;
