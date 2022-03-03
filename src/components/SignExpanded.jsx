import React, { useState, useEffect } from "react";
import { Motion, spring } from "react-motion";
import Input from "./Input";
import SubmitButton from "./SubmitButton";

const SignExpanded = (props) => {
  const [flexState, setFlexState] = useState(false);
  const [animIsFinished, setAnimIsFinished] = useState(false);

  useEffect(() => {
    setFlexState(true);
  });
  const handleClick = () => {
    setAnimIsFinished(true);
  };
  return (
    <Motion style={{ flexVal: spring(flexState ? 8 : 1) }} onRest={handleClick}>
      {({ flexVal }) => (
        <div
          className={
            props.type === "signIn" ? "signInExpanded" : "signUpExpanded"
          }
          style={{
            flexGrow: `${flexVal}`,
          }}
        >
          <Motion
            style={{
              opacity: spring(flexState ? 1 : 0, {
                stiffness: 300,
                damping: 17,
              }),
              y: spring(flexState ? 0 : 50, {
                stiffness: 100,
                damping: 17,
              }),
            }}
          >
            {({ opacity, y }) => (
              <form
                className="logForm"
                style={{
                  WebkitTransform: `translate3d(0, ${y}px, 0)`,
                  transform: `translate3d(0, ${y}px, 0)`,
                  opacity: `${opacity}`,
                }}
              >
                <h2>{props.type === "signIn" ? "SIGN IN" : "SIGN UP"}</h2>
                <Input id="login" type="text" placeholder="LOGIN" />
                <Input id="password" type="password" placeholder="PASSWORD" />
                <SubmitButton type={props.type}></SubmitButton>
                <a href="url" className="forgotPass">
                  {props.type == "signIn" ? "Forgot password?" : ""}
                </a>
              </form>
            )}
          </Motion>
        </div>
      )}
    </Motion>
  );
};

export default SignExpanded;
