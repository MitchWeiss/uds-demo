import axios from "axios";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { delay } from "redux-saga";

export const FETCH_TASKS_INITIATED = "FETCH_TASKS_INITIATED";
export const FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS";
export const FETCH_TASKS_FAILED = "FETCH_TASKS_FAILED";
export const FETCH_TASK_INITIATED = "FETCH_TASK_INITIATED";
export const FETCH_TASK_SUCCESS = "FETCH_TASK_SUCCESS";
export const FETCH_TASK_FAILED = "FETCH_TASK_FAILED";

export function* fetchTasks() {
  try {
    const response = yield call(axios.get, "/data.json");
    yield call(delay, 1000);
    yield put({ type: FETCH_TASKS_SUCCESS, data: response.data });
  } catch (error) {
    yield put({ type: FETCH_TASKS_FAILED, error });
  }
}

export function* watchFetchTasks() {
  yield takeEvery(FETCH_TASKS_INITIATED, fetchTasks);
}

export function* fetchTask(slug) {
  try {
    const response = yield call(axios.get, "/data.json");
    yield call(delay, 1000);
    yield put({
      type: FETCH_TASK_SUCCESS,
      data: response.data.tasks.find(dataTask => dataTask.slug === slug)
    });
  } catch (error) {
    yield put({ type: FETCH_TASK_FAILED, error });
  }
}

export function* watchFetchTask() {
  yield takeLatest(FETCH_TASK_INITIATED, action => fetchTask(action.task.slug));
}
