import { FETCH_TASKS_INITIATED, FETCH_TASKS_SUCCESS } from "../sagas/tasks";

const defaultState = { loading: false, tasks: [] };

const tasks = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_TASKS_INITIATED:
      return { ...state, loading: true };
    case FETCH_TASKS_SUCCESS:
      return { loading: false, tasks: action.data.tasks }
    default:
      return state;
  }
};
export default tasks;
