import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAsia, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import TaskDetail from "../design/task_detail/task_detail";

const Location = ({ remote, location }) => {
  if (remote) {
    return (
      <TaskDetail
        icon={
          <FontAwesomeIcon size="2x" icon={faGlobeAsia} color="lightgrey" fixedWidth />
        }
        title="Location"
      >
        Remote
      </TaskDetail>
    );
  }

  if (location) {
    return (
      <TaskDetail
        icon={
          <FontAwesomeIcon size="2x" icon={faMapMarkerAlt} color="lightgrey" fixedWidth />
        }
        title="Location"
      >
        {location}
      </TaskDetail>
    );
  }

  return null;
};

const mapStateToProps = state => ({
  remote: state.task.online_or_phone,
  location:
    state.task.location_ids &&
    state.locations.locations.find(
      location => location.id === state.task.location_ids[0]
    ).display_name
});

export default connect(mapStateToProps)(Location);
