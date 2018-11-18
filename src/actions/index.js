export const FETCH_TASKS_INITIATED = "FETCH_TASKS_INITIATED";
export const FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS";
export const FETCH_TASKS_FAILED = "FETCH_TASKS_FAILED";
export const FETCH_TASK_INITIATED = "FETCH_TASK_INITIATED";
export const FETCH_TASK_SUCCESS = "FETCH_TASK_SUCCESS";
export const FETCH_TASK_FAILED = "FETCH_TASK_FAILED";
export const CLAIM_TASK = "CLAIM_TASK";
export const CLAIM_TASK_SUCCESS = "CLAIM_TASK_SUCCESS";

export const fetchTasks = () => ({ type: FETCH_TASKS_INITIATED });

export const fetchTask = task => ({ type: FETCH_TASK_INITIATED, task });

export const claimTask = taskId => ({ type: CLAIM_TASK, taskId });
