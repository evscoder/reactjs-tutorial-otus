import React, { useState } from "react";
import { Field } from "./Field";

export const Fieldbox = () => {
  const [items] = useState([1, 2, 3, 4, 5]);

  return (
    <div style={{ border: "1px solid", height: "300px", width: "300px" }}>
      {items.map((item, index) => (
        <Field number={index + 1} key={index + 1} />
      ))}
    </div>
  );
};
