import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";

import { Fieldbox } from "@/FieldBox";

export default {
  title: "FieldBox",
  decorators: [withKnobs],
};

const elementClicked = action("Cell clicked (element)");

export const defaultFieldBox = () => [
  <Fieldbox key="jsx" onClick={elementClicked} items={[]} />,
];

export const activeFieldBox = () => [
  <Fieldbox key="jsx" onClick={elementClicked} items={[1, 2, 3, 4, 5]} />,
];
