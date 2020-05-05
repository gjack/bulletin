import createDataContext from "./createDataContext";
import bulletinApi from "../api/bulletin";

const authReducer = (state, action) => {
  switch (action.type) {
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
      console.log(response.data);
    } catch (err) {
      console.log(err);
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
  { isSignedIn: false }
);
