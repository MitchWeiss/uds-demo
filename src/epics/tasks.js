import { ofType } from "redux-observable";
import { ajax } from "rxjs/ajax";
import { of } from "rxjs";
import { delay, mergeMap, map, switchMap } from "rxjs/operators";
import {
  FETCH_TASKS_INITIATED,
  FETCH_TASKS_SUCCESS,
  FETCH_TASK_SUCCESS,
  FETCH_TASK_INITIATED,
  CLAIM_TASK_SUCCESS,
  CLAIM_TASK
} from "../actions";

export const fetchTasks = action$ =>
  action$.pipe(
    ofType(FETCH_TASKS_INITIATED),
    delay(1000),
    mergeMap(() =>
      ajax
        .getJSON("/data.json")
        .pipe(map(response => ({ type: FETCH_TASKS_SUCCESS, data: response })))
    )
  );

export const fetchTask = action$ =>
  action$.pipe(
    ofType(FETCH_TASK_INITIATED),
    switchMap(action =>
      of({ type: FETCH_TASK_SUCCESS, data: action.task }).pipe(delay(1000))
    )
  );

export const claimTask = action$ =>
  action$.pipe(
    ofType(CLAIM_TASK),
    delay(1000),
    map(action => ({ type: CLAIM_TASK_SUCCESS, taskId: action.taskId }))
  );
