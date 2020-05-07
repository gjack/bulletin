import createDataContext from "./createDataContext";
import bulletinApi from "../api/bulletin";
import { navigate } from "../navigationRef";

const organizationReducer = (state, action) => {
  switch (action.type) {
    case "fetchOrganizations":
      return { organizations: action.payload, errorMessage: "" };
    case "addError":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const fetchOrganizations = (dispatch) => async () => {
  try {
    const response = await bulletinApi.get("/organizations");
    dispatch({ type: "fetchOrganizations", payload: response.data.data });
  } catch (error) {
    dispatch({
      type: "addError",
      payload: "Something went wrong with your request. Please, try again.",
    });
  }
};

export const { Provider, Context } = createDataContext(
  organizationReducer,
  { fetchOrganizations },
  { organizations: [], errorMessage: "" }
);
