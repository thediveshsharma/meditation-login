import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import AuthModal from "../components/AuthModal";

const Join = () => {
  const mounted = useRef();
  useEffect(() => {
    if (mounted.current) {
      return;
    }
    mounted.current = true;
  }, []);

  return (
    <ReactCSSTransitionGroup
      transitionName="example"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}
    >
      {mounted.current && (
        <div className="Join">
          <AuthModal />
        </div>
      )}
    </ReactCSSTransitionGroup>
  );
};

export default Join;
