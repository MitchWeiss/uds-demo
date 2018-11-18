import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import TaskDetail from "../design/task_detail/task_detail";

const DueDate = ({ date }) => {
  if (date) {
    return (
      <TaskDetail
        icon={
          <FontAwesomeIcon size="2x" icon={faCalendarAlt} color="lightgrey" fixedWidth />
        }
        title="due date"
      >
        {new Date(date).toLocaleDateString("en-AU")}
      </TaskDetail>
    );
  }
  return null;
};

const mapStateToProps = state => ({
  date: state.task.deadline
});

export default connect(mapStateToProps)(DueDate);
