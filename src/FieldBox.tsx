import React, { FC, useState } from "react";
import { Field } from "./Field";
import styled from "@emotion/styled";

export interface Props {
  items: number[];
  onClick: () => void;
}

const FieldBoxStyled = styled.div`
  border: 1px solid;
  width: 300px;
  height: 300px;
`;

export const Fieldbox: FC<Props> = ({ items, onClick }) => {
  return (
    <FieldBoxStyled onClick={onClick}>
      {items.map((item: number, index) => (
        <Field number={index + 1} key={index + 1} />
      ))}
    </FieldBoxStyled>
  );
};
