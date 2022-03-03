import React from "react";
import { useState } from "react";

import Sign from "./Sign";
import SignCollapsed from "./SignCollapsed";
import SignExpanded from "./SignExpanded";

const AuthModal = () => {
  const [clickleft, setClickleft] = useState(false);
  const [clickright, setClickright] = useState(false);

  const handleClickleft = () => {
    setClickleft(true);
    setClickright(false);
  };

  const handleClickright = () => {
    setClickleft(false);
    setClickright(true);
  };

  const getAuthContent = () => {
    if (clickleft === false && clickright === false) {
      return (
        <div className="AuthModal">
          <Sign type="signIn" onChange={handleClickleft} />
          <Sign type="signUp" onChange={handleClickright} />
        </div>
      );
    } else if (clickright === true) {
      return (
        <div className="AuthModal">
          <SignCollapsed type="signIn" onChange={handleClickleft} />
          <SignExpanded type="signUp" />
        </div>
      );
    } else if (clickleft === true) {
      return (
        <div className="AuthModal">
          <SignExpanded type="signIn"></SignExpanded>
          <SignCollapsed
            type="signUp"
            onChange={handleClickright}
          ></SignCollapsed>
        </div>
      );
    }
  };

  return <div className="AuthModal">{getAuthContent()}</div>;
};

export default AuthModal;
