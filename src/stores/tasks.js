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
        this.tasks = res.data.tasks;
        this.locations = res.data.locations;
        this.profiles = res.data.profiles;
        this.loading = false;
      }), 1000);
    
  };
}
