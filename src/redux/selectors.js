import { createSelector } from "@reduxjs/toolkit";

// Settings
const selectSettings = (state) => state.settings;

export const selectSidebarState = createSelector(
  [selectSettings],
  (settings) => settings.sidebarState
);

// General

// User
const selectUser = (state) => state.user;

export const selectToken = createSelector([selectUser], (user) => user.token);

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const selectIsUserLoading = createSelector(
  [selectUser],
  (user) => user.isLoading
);
