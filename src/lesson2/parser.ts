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
    const isValidItemPush =
      (itemNumber(prevItem) && isBinary(item)) ||
      (itemNumber(prevItem) && isUnary(item)) ||
      (itemOperator(prevItem) && isBracketOpen(item)) ||
      (itemNumber(prevItem) && isBracketClose(item));
    const isValidFunctionPush =
      itemOperator(prevItem) && startsWithFunction(item);

    if (isValidNumberPush) {
      result.push(Number(item));
    } else if (isValidItemPush) {
      result.push(item);
    } else if (isValidFunctionPush) {
      const arr = item.split("(");
      const number = arr[1].slice(0, -1);

      result.push(Number(number));
      result.push(arr[0]);
    } else {
      throw new TypeError("Unexpected string");
    }

    return result;
  }, []);
};
