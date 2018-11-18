import React from "react";
import { withKnobs, number, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import TaskDetail from "./task_detail";

storiesOf("Task Detail", module)
  .addDecorator(withKnobs)
  .add("Task Detail", () => (
    <TaskDetail
      title="location"
      icon={<FontAwesomeIcon icon={faMapMarkerAlt} color="lightgrey" />}
    >
      Surry Hills, NSW
    </TaskDetail>
  ));
