import { FETCH_TASKS_SUCCESS } from "../sagas/tasks";

const tasks = (state = {}, action) => {
  switch (action.type) {
    case FETCH_TASKS_SUCCESS:
      return { locations: action.data.locations }
    default:
      return state;
  }
};
export default tasks;
