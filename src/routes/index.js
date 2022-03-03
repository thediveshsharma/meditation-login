import React from "react";
import { Redirect } from "react-router-dom";

import { Error, Home, Join, Video } from "../pages/index";

// type: auth|public|private|error
const allRoutes = [
  {
    path: "/join",
    exact: true,
    component: Join,
    type: "auth",
  },

  {
    path: "/",
    exact: true,
    component: Home,
    type: "public",
  },

  {
    path: "/trending",
    exact: true,
    component: Video,
    type: "public",
  },

  {
    path: "/watch",
    // exact: true,
    component: Video,
    type: "public",
  },

  // private
  // { path: "/bookmarks", exact: true, component: Bookmark, isPublic: false },

  // error
  { path: "/404", exact: true, component: Error, type: "error" },

  // *
  {
    path: "/",
    component: () => <Redirect to="/404" />,
    type: "error",
  },
];

export default allRoutes;
