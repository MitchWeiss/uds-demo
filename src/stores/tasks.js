import { observable, action } from "mobx";
import axios from "axios";

export default class Tasks {
  @observable loading = false;
  @observable tasks = [];
  @observable locations = [];
  @observable profiles = [];

  @action fetchTasks = () => {
    this.loading = true;
    setTimeout(() => axios.get("/data.json").then(res => {
        // FYI: If you turn on `enforceAction` as suggested in `index.js`
        // This will either have to be an action or wrapped in `runinAction()`.
        this.tasks = res.data.tasks;
        this.locations = res.data.locations;
        this.profiles = res.data.profiles;
        this.loading = false;
      }), 1000);

  };
}
