import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Tasks from './stores/tasks';
import Task from './stores/task';
import { Provider } from 'mobx-react';

// One of the best things about Redux is actions as it makes it very clear what's happening.
// We could achive the same thing with MobX with
// `configure({ enforceAction: true })` to enforce updates to be done via actions only.

const tasks = new Tasks();
const task = new Task();
const app = (
  // I feel *the* currently selected task is something
  // that should be managed inside a React component and not be part of a global store.
  // That way, it'd be much easire, i.e., less things to mock/fake, to storybook the
  // big component, i.e., picking a task and showing it in the right panel.
  <Provider tasks={tasks} task={task}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
