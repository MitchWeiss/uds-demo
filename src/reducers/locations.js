import { FETCH_TASKS_SUCCESS } from "../actions";

const tasks = (state = {}, action) => {
  switch (action.type) {
    case FETCH_TASKS_SUCCESS:
      return { locations: action.data.locations }
    default:
      return state;
  }
};
export default tasks;
