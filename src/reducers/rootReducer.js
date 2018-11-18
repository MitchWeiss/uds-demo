import { combineReducers } from "redux";
import tasks from "./tasks";
import profiles from "./profiles";
import locations from "./locations";
import task from "./task";

export default combineReducers({
  tasks,
  profiles,
  locations,
  task
});
