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
    default:
      return state;
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
  return () => {};
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signUp, signIn, signOut, clearErrorMessage },
  { token: null, errorMessage: "" }
);
