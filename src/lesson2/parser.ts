import {
  itemNumber,
  itemOperator,
  isBracketClose,
  isBracketOpen,
  isNumber,
  startsWithFunction,
  isBinary,
  isUnary,
} from "./helpers";

export type ParsedLineType = (number | string)[];

export const parser = (line: string): ParsedLineType | null => {
  const stack = line.split(" ");

  return stack.reduce<ParsedLineType>((result, item, key) => {
    const prevItem = stack[key - 1];
    const isValidNumberPush = itemOperator(prevItem) && isNumber(item);
    const isValidBinaryOperatorPush = itemNumber(prevItem) && isBinary(item);
    const isValidUnaryOperatorPush = itemNumber(prevItem) && isUnary(item);
    const isValidFunctionPush =
      itemOperator(prevItem) && startsWithFunction(item);
    const isValidBracketOpenPush =
      itemOperator(prevItem) && isBracketOpen(item);
    const isValidBracketClosePush =
      itemNumber(prevItem) && isBracketClose(item);

    if (isValidNumberPush) {
      result.push(Number(item));
    } else if (isValidBinaryOperatorPush || isValidUnaryOperatorPush) {
      result.push(item);
    } else if (isValidFunctionPush) {
      const arr = item.split("(");
      const number = arr[1].slice(0, -1);

      result.push(Number(number));
      result.push(arr[0]);
    } else if (isValidBracketOpenPush) {
      result.push(item);
    } else if (isValidBracketClosePush) {
      result.push(item);
    } else {
      throw new TypeError("Unexpected string");
    }

    return result;
  }, []);
};
