import "./App.scss";
import "react-toastify/dist/ReactToastify.css";
import "tippy.js/dist/tippy.css"; //

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { useSettingsActions } from "./hooks/useActions";
import routes from "./routes";
import Route from "./routes/Route";
import CONST from "./shared/CONST";

const App = () => {
  // Selectors
  const { setting } = useSelector((state) => state);

  // Actions
  const { setSidebarState } = useSettingsActions();

  const onMediaQueryTrigger = (matches) => {
    if (matches) {
      console.log("matches");
      setSidebarState({ isOpen: false });
    } else {
      console.log("not matches");
      if (!setting.sidebarState.isOpen) {
        setSidebarState({ isOpen: true });
      }
    }
  };

  useMediaQuery(
    { maxWidth: CONST.BREAKPOINTS.MOBILE },
    undefined,
    onMediaQueryTrigger
  );

  useEffect(() => {
    const mouseCursor = document.querySelectorAll(".cursor");
    window.addEventListener("mousemove", function (e) {
      mouseCursor.forEach((cursor) => {
        cursor.style.top = `${e.clientY}px`;
        cursor.style.left = `${e.clientX}px`;
      });
    });
  }, []);

  return (
    <>
      <div className="app-alert">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          pauseOnFocusLoss={false}
          // pauseOnHover
        />
      </div>
      <div className="App">
        <Router>
          <Switch>
            {routes.map(({ path, type, component, exact }, id) => (
              <Route
                path={path}
                type={type}
                component={component}
                exact={exact}
                key={id}
              />
            ))}
          </Switch>
        </Router>
      </div>

      <div className="cursor cursor-outer"></div>
      <div className="cursor cursor-inner"></div>
    </>
  );
};

export default App;
