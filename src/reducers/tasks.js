import {
  FETCH_TASKS_INITIATED,
  FETCH_TASKS_SUCCESS,
  CLAIM_TASK_SUCCESS
} from "../actions";

const defaultState = { loading: false, tasks: [] };

const tasks = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_TASKS_INITIATED:
      return { ...state, loading: true };
    case FETCH_TASKS_SUCCESS:
      return { loading: false, tasks: action.data.tasks };
    case CLAIM_TASK_SUCCESS:
      const tasks = state.tasks.map(task => {
        if (task.id === action.taskId) {
          return { ...task, state: "assigned" };
        }
        return task;
      });
      return { ...state, tasks };
    default:
      return state;
  }
};
export default tasks;
