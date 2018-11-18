import { FETCH_TASKS_INITIATED, FETCH_TASK_INITIATED } from "../sagas/tasks";

export const fetchTasks = () => ({ type: FETCH_TASKS_INITIATED });

export const fetchTask = task => ({ type: FETCH_TASK_INITIATED, task: task });
