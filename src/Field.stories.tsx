import React from "react";
import { action } from "@storybook/addon-actions";
import { Field } from "@/Field";

export default {
  title: "Field Item",
};

export const FieldClicked = (args: any) => [
  <Field onClick={action("Cell clicked")} key="jsx" {...args} />,
  <Field onClick={action("Cell clicked")} key="jsx" {...args} />,
];
