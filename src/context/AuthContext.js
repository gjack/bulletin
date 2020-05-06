import createDataContext from "./createDataContext";
import bulletinApi from "../api/bulletin";
import { AsyncStorage } from "react-native";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "addError":
      return { ...state, errorMessage: action.payload };
    case "authSuccess":
      return { errorMessage: "", token: action.payload };
    case "clearErrorMessage":
      return { ...state, errorMessage: "" };
    case "signOut":
      return { token: null, errorMessage: "" };
    default:
      return state;
  }
};

const tryLocalLogin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "authSuccess", payload: token });
    navigate("mainFlow");
  } else {
    navigate("loginFlow");
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clearErrorMessage" });
};

const signUp = (dispatch) => {
  return async ({
    firstName,
    lastName,
    email,
    password,
    passwordConfirmation,
  }) => {
    try {
      const response = await bulletinApi.post("/subscribers", {
        subscriber: {
          first_name: firstName,
          last_name: lastName,
          password_confirmation: passwordConfirmation,
          email,
          password,
        },
      });

      await AsyncStorage.setItem("token", response.data.data.token);
      dispatch({ type: "authSuccess", payload: response.data.data.token });
      navigate("mainFlow");
    } catch (err) {
      dispatch({
        type: "addError",
        payload: "Something went wrong with sign up.",
      });
    }
  };
};

const signIn = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await bulletinApi.post("/subscribers_sessions", {
        email,
        password,
      });
      await AsyncStorage.setItem("token", response.data.data.token);
      dispatch({ type: "authSuccess", payload: response.data.data.token });
      navigate("mainFlow");
    } catch (error) {
      dispatch({
        type: "addError",
        payload: "Wrong email or password",
      });
    }
  };
};

const signOut = (dispatch) => {
  return async () => {
    try {
      await bulletinApi.delete("/subscribers_sessions");
      await AsyncStorage.removeItem("token");
      dispatch({ type: "signOut" });
      navigate("loginFlow");
    } catch (error) {
      dispatch({
        type: "addError",
        payload: "There was a problem signing you out.",
      });
    }
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signUp, signIn, signOut, clearErrorMessage, tryLocalLogin },
  { token: null, errorMessage: "" }
);
