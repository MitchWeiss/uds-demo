import {
  FETCH_TASK_INITIATED,
  FETCH_TASK_SUCCESS,
  CLAIM_TASK_SUCCESS,
  CLAIM_TASK
} from "../sagas/tasks";

const defaultState = { loading: false };

const tasks = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_TASK_INITIATED:
      return { id: action.task.id, name: action.task.name, loading: true };
    case FETCH_TASK_SUCCESS:
      return { loading: false, ...action.data };
    case CLAIM_TASK:
      return { ...state, attemptingClaim: true };
    case CLAIM_TASK_SUCCESS:
      return { ...state, state: "assigned", attemptingClaim: false };
    default:
      return state;
  }
};
export default tasks;
