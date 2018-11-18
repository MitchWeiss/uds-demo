import { all } from "redux-saga/effects";
import { watchFetchTasks, watchFetchTask } from "./tasks";

export default function* rootSaga() {
  yield all([watchFetchTasks(), watchFetchTask()]);
}
