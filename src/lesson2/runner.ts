import { ParsedLineType, parser } from "./parser";
import { firstPrioritiesCalc, secondPrioritiesCalc } from "./engine";
import { isBracketClose, isBracketOpen } from "./helpers";

const calculated = (stack: ParsedLineType): number => {
  const firstPrioritiesRes = firstPrioritiesCalc(stack);

  if (firstPrioritiesRes.length === 1) {
    return Number(firstPrioritiesRes[0]);
  }

  return secondPrioritiesCalc(firstPrioritiesRes);
};

export const runner = (line: string): number => {
  const stack = parser(line);

  if (stack === null) {
    throw new TypeError("Unexpected string");
  }

  const openBraskedPositions: number[] = [];

  stack.forEach((item, index) => {
    if (isBracketOpen(String(item))) {
      openBraskedPositions.push(index);
    } else if (isBracketClose(String(item))) {
      const openBraskedPosition = openBraskedPositions.pop() || 0;
      const arr = stack.splice(
        openBraskedPosition + 1,
        index - openBraskedPosition
      );

      stack.splice(openBraskedPosition, 1, calculated(arr));
      index = openBraskedPosition;
    }
  });

  return calculated(stack);
};
