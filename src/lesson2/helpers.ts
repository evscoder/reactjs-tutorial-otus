import { mathBinaryOperators, mathUnaryOperators } from "./mathOperators";

export const isNumber = (item: string): boolean => !isNaN(Number(item));

export const isBracketOpen = (item: string): boolean => item === "(";
export const isBracketClose = (item: string): boolean => item === ")";

export const isUnary = (item: string): boolean => {
  return mathUnaryOperators.hasOwnProperty(item);
};

export const isBinary = (item: string): boolean => {
  return mathBinaryOperators.hasOwnProperty(item);
};

export const startsWithFunction = (item: string): boolean => {
  if (item) {
    for (const key in mathUnaryOperators) {
      if (item.indexOf(key) === 0) {
        return true;
      }
    }

    return false;
  }

  return false;
};

export const itemNumber = (item: string): boolean => {
  return (
    isUnary(item) ||
    isBracketClose(item) ||
    isNumber(item) ||
    startsWithFunction(item)
  );
};

export const itemOperator = (item: string): boolean => {
  return isBinary(item) || isBracketOpen(item) || !item;
};
