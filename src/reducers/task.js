import { FETCH_TASK_INITIATED, FETCH_TASK_SUCCESS } from "../sagas/tasks";

const defaultState = { loading: false };

const tasks = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_TASK_INITIATED:
      return { id: action.task.id, name: action.task.name, loading: true };
    case FETCH_TASK_SUCCESS:
      return { loading: false, ...action.data }
    default:
      return state;
  }
};
export default tasks;
