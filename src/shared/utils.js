// need work with loggin name and object
import { toast } from "react-toastify";

/**
 * Logs the different values passed to it
 * to console in a readable format. Catches any error and informs the user.
 *
 * @param {any} values
 */
export const logger = (...values) => {
  try {
    const logs = values.map((value) => {
      return {
        [value]: value,
      };
    });

    console.group("Something Logged");
    console.trace(""); //todo: find a better way to get the line number of the caller

    console.groupCollapsed("Values");
    console.log(
      "%c Logging!!!",
      "background: #222; color: #bada55;border-radius: 5px;padding: 5px;"
    );
    console.log(...logs);
    console.log(
      "%c Log done!!!",
      "background: #222; color: #bada55;border-radius: 5px;padding: 5px;"
    );
    console.groupEnd();
    console.groupEnd();
  } catch (error) {
    console.log(
      "%c Error detected while logging!!!",
      "background: red; color: white; font-weight:700;padding:5px;border-radius:5px;"
    );
    console.log(error);
  }
};

export const createAlert = ({ type, message }, config = {}) =>
  toast[type](message, { ...config });

export const getLocalStorageItem = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    return "";
  }
};

export const setLocalStorageItem = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

export const removeLocalStorageItem = (key) => localStorage.removeItem(key);
