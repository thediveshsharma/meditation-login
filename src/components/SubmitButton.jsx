import PropTypes from "prop-types";
import React from "react";
import { FaFacebook, FaGooglePlus, FaTwitter } from "react-icons/lib/fa";
import { MdArrowForward } from "react-icons/lib/md";

const SubmitButton = (props) => {
  let socialNets = null;

  if (props.type === "signIn") {
    socialNets = (
      <div className="socialNets">
        <FaGooglePlus className="socialNetsIcon" />
        <FaTwitter className="socialNetsIcon" />
        <FaFacebook className="socialNetsIcon" />
      </div>
    );
  } else {
    socialNets = <div className="socialNets"></div>;
  }
  return (
    <div className={"submitButton"}>
      {socialNets}
      <button
        className={props.type === "signIn" ? "submitSignIn" : "submitSignUp"}
      >
        <MdArrowForward />
      </button>
    </div>
  );
};

SubmitButton.propTypes = {
  type: PropTypes.string,
};

export default SubmitButton;
