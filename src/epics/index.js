import { combineEpics } from "redux-observable";
import { fetchTasks, fetchTask, claimTask } from "./tasks";

export default combineEpics(fetchTasks, fetchTask, claimTask);
