import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import TaskDetail from "../design/task_detail/task_detail";
import { observer, inject } from "mobx-react";

const DueDate = ({ date }) => {
  if (date) {
    return (
      <TaskDetail
        icon={
          <FontAwesomeIcon
            size="2x"
            icon={faCalendarAlt}
            color="lightgrey"
            fixedWidth
          />
        }
        title="due date"
      >
        {new Date(date).toLocaleDateString("en-AU")}
      </TaskDetail>
    );
  }
  return null;
};

export default inject(stores => ({
  date: stores.task.task.deadline
}))(observer(DueDate));
