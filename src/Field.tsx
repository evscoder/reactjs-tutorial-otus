import React, { FC, useState } from "react";
import styled from "@emotion/styled";
interface FieldProps {
  children?: string;
  number: number;
  onClick?: () => void;
}
const FieldStyled = styled.button`
  border: 1px solid;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  display: inline-block;
  vertical-align: middle;
  padding: 0;
  margin: 10px 5px;
  cursor: pointer;
`;

export const Field: FC<FieldProps> = ({ number: number, onClick }) => {
  const [isNum, setIsNum] = useState<string | number>("x");

  const onGetNumber = () => {
    return setIsNum(number);
  };

  return (
    <FieldStyled onClick={onClick ? onClick : onGetNumber}>{isNum}</FieldStyled>
  );
};
