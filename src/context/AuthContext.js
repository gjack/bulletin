import createDataContext from "./createDataContext";
import bulletinApi from "../api/bulletin";
import { AsyncStorage } from "react-native";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "addError":
      return { ...state, errorMessage: action.payload };
    case "signUpSuccess":
      return { errorMessage: "", token: action.payload };
    default:
      return state;
  }
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
      dispatch({ type: "signUpSuccess", payload: response.data.data.token });
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
  return ({ email, password }) => {};
};

const signOut = (dispatch) => {
  return () => {};
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signUp, signIn, signOut },
  { token: null, errorMessage: "" }
);
