import { FETCH_TASKS_SUCCESS } from "../sagas/tasks";

const tasks = (state = { profiles: [] }, action) => {
  switch (action.type) {
    case FETCH_TASKS_SUCCESS:
      return { profiles: action.data.profiles };
    default:
      return state;
  }
};
export default tasks;
