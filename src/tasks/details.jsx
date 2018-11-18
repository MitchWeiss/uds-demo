import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import TaskDetail from "../design/task_detail/task_detail";

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

const mapStateToProps = state => ({
  details: state.task.details,
});

export default connect(mapStateToProps)(Details);
