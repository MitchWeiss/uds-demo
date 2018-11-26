import { observable, action, flow, computed } from "mobx";

const promiseTimeout = time => new Promise(res => setTimeout(res, time));

export default class Task {
  @observable loading = false;
  @observable attemptingClaim = false;
  @observable task = {};

  doFetchTask = flow(function*(task) {
    try {
      yield promiseTimeout(1000);
      this.task = task;
      this.loading = false;
    } catch (e) {
      console.log(e);
    }
  });

  @action fetchTask = task => {
    if (this.pendingFetch) {
      this.pendingFetch.catch(() => {});
      this.pendingFetch.cancel();
      this.pendingFetch = null;
    }
    this.loading = true;
    this.task = { id: task.id, name: task.name };
    this.pendingFetch = this.doFetchTask(task);
  };

  @computed get claimable() {
    return this.task.state === "posted";
  }

  @computed get formattedPrice() {
    return this.task.amount / 100;
  }

  @action claimTask = taskId => {
    this.attemptingClaim = true;
    promiseTimeout(1000).then(() => {
      this.attemptingClaim = false;
      this.task.state = "assigned";
    });
  };
}
