import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { settingsActions } from "../redux/slices/settingSlice";
import { userActions } from "../redux/slices/userSlice";

export const useSettingsActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(settingsActions, dispatch);
};

export const useUserActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(userActions, dispatch);
};
