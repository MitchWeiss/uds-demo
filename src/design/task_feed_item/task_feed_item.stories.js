import React from "react";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import TaskFeedItem from "./task_feed_item";

storiesOf("Task Feed Item", module)
  .addDecorator(withKnobs)
  .add("Basic item", () => (
    <TaskFeedItem
      title={text("Title", "Clean my house")}
      location={text("Location", "Surry Hills, NSW")}
      remote={boolean("Remote task", false)}
      price={text("Price", "200")}
      avatarUrl={text("Avatar URL", "")}
      status={select("Status", ["posted", "assigned"], "posted")}
      date="Sat 1st Jan"
    />
  ));
