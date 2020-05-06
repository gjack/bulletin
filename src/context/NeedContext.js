import createDataContext from "./createDataContext";
import bulletinApi from "../api/bulletin";
import { navigate } from "../navigationRef";

const needReducer = (state, action) => {
  switch (action.type) {
    case "fetchNeeds":
      return action.payload;
    default:
      return state;
  }
};

const fetchNeeds = (dispatch) => async () => {
  const response = await bulletinApi.get("/needs");
  console.log(response.data);
  dispatch({ type: "fetchNeeds", payload: response.data });
};

export const { Provider, Context } = createDataContext(
  needReducer,
  { fetchNeeds },
  []
);
