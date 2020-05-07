import createDataContext from "./createDataContext";
import bulletinApi from "../api/bulletin";
import { navigate } from "../navigationRef";

const needReducer = (state, action) => {
  switch (action.type) {
    case "fetchNeeds":
      return { needs: action.payload, errorMessage: "" };
    case "addError":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const fetchNeeds = (dispatch) => async ({ searchTerm, organizationId }) => {
  try {
    const response = await bulletinApi.get("/needs", {
      params: { query: searchTerm, organization_id: organizationId },
    });
    dispatch({ type: "fetchNeeds", payload: response.data.data });
  } catch (error) {
    dispatch({
      type: "addError",
      payload: "Something went wrong with your request. Please, try again.",
    });
  }
};

const createNeed = (dispatch) => async ({
  title,
  description,
  organizationId,
}) => {
  try {
    const response = await bulletinApi.post("/needs", {
      need: { title, description, organization_id: organizationId },
    });
    navigate("RequestsList");
  } catch (error) {
    dispatch({
      type: "addError",
      payload: "Something went wrong with your request. Please, try again.",
    });
  }
};

export const { Provider, Context } = createDataContext(
  needReducer,
  { fetchNeeds, createNeed },
  { needs: [], errorMessage: "" }
);
