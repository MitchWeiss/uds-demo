import React from "react";
import { withKnobs, number, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import Avatar from "./avatar";

storiesOf("Avatar", module)
  .addDecorator(withKnobs)
  .add("Avatar", () => <Avatar size={number("Size", 5)} imgSrc={text('Image Source')} />);
