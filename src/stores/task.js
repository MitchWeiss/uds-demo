import { observable, action, flow } from "mobx";

const promiseTimeout = time => new Promise(res => setTimeout(res, time));

export default class Task {
  @observable loading = false;
  @observable task = {};

  @action fetchTask = task => {
    // if (this.pendingFetch) {
    //   this.pendingFetch.cancel();
    //   this.pendingFetch = null;
    // }

    this.loading = true;
    this.task = { id: task.id, name: task.name };
    promiseTimeout(1000).then(() => {
      this.task = task;
      this.loading = false;
    });

    // this.pendingFetch = flow(function*() {
    //   yield promiseTimeout(1000);
    //   this.task = task;
    //   this.loading = false;
    //   this.pendingFetch = null;
    // });
  };
}
