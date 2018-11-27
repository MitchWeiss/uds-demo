import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAsia, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import TaskDetail from "../design/task_detail/task_detail";
import { observer, inject } from "mobx-react";

const Location = ({ remote, location }) => {
  if (remote) {
    return (
      <TaskDetail
        icon={
          <FontAwesomeIcon
            size="2x"
            icon={faGlobeAsia}
            color="lightgrey"
            fixedWidth
          />
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
          <FontAwesomeIcon
            size="2x"
            icon={faMapMarkerAlt}
            color="lightgrey"
            fixedWidth
          />
        }
        title="Location"
      >
        {location}
      </TaskDetail>
    );
  }

  return null;
};

// nit: once connected, the component is no longer just a "location"
// it's the location of something very spicific, e.g., the selected task here,
// so it should be named accordingly.
export default inject(stores => ({
  remote: stores.task.task.online_or_phone,
  location:
    stores.task.task.location_ids &&
    stores.tasks.locations.find(
      location => location.id === stores.task.task.location_ids[0]
    ).display_name
}))(observer(Location));
