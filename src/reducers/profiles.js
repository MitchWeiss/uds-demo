import { FETCH_TASKS_SUCCESS } from "../actions";

const tasks = (state = { profiles: [] }, action) => {
  switch (action.type) {
    case FETCH_TASKS_SUCCESS:
      return { profiles: action.data.profiles };
    default:
      return state;
  }
};
export default tasks;
