import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import TaskDetail from "../design/task_detail/task_detail";
import { observer, inject } from "mobx-react";

const Details = ({ details }) => {
  if (details) {
    return (
      <TaskDetail
        icon={
          <FontAwesomeIcon size="2x" icon={faInfo} color="lightgrey" fixedWidth />
        }
        title="Task details"
      >
        {details}
      </TaskDetail>
    );
  }
  return null;
};

export default inject(stores => ({
  details: stores.task.task.details
}))(observer(Details));
