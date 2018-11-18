import {
  FETCH_TASKS_INITIATED,
  FETCH_TASK_INITIATED,
  CLAIM_TASK
} from "../sagas/tasks";

export const fetchTasks = () => ({ type: FETCH_TASKS_INITIATED });

export const fetchTask = task => ({ type: FETCH_TASK_INITIATED, task });

export const claimTask = taskId => ({ type: CLAIM_TASK, taskId });
