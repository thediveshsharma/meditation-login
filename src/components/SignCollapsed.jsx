/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from "prop-types";
import React from "react";
import { MdAccountCircle, MdAddCircle } from "react-icons/lib/md";

const SignCollapsed = (props) => {
  let icon = null;

  if (props.type == "signIn") {
    icon = <MdAccountCircle className="iconsCollapsed" />;
  } else {
    icon = <MdAddCircle className="iconsCollapsed" />;
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      onClick={props.onChange}
      className={props.type == "signIn" ? "signInCollapsed" : "signUpCollapsed"}
    >
      {icon}
    </div>
  );
};

SignCollapsed.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
};

export default SignCollapsed;
