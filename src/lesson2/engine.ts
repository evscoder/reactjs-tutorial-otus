import { ParsedLineType } from "./parser";
import { isNumber } from "./helpers";
import {
  mathPriorities,
  mathOperatorsPriorities,
  mathUnaryOperators,
  mathBinaryOperators,
} from "./mathOperators";

const [FIRST, SECOND] = mathPriorities;

export const firstPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, nextItem) => {
    const prevItem = result[result.length - 2];
    const item = result[result.length - 1];

    if (mathUnaryOperators[nextItem]) {
      result = [
        ...result.slice(0, -1),
        mathUnaryOperators[nextItem](Number(item)),
      ];
    } else if (
      !isNumber(String(item)) &&
      mathOperatorsPriorities[item] === FIRST
    ) {
      if (!mathBinaryOperators[item]) {
        throw new TypeError("Unexpected stack!");
      }
      result = [
        ...result.slice(0, -2),
        mathBinaryOperators[item](Number(prevItem), Number(nextItem)),
      ];
    } else {
      result.push(nextItem);
    }
    return result;
  }, []);

export const secondPrioritiesCalc = (stack: ParsedLineType): number =>
  stack.reduce<number>((result, nextItem, key) => {
    const item = stack[key - 1];

    if (mathOperatorsPriorities[item] === FIRST) {
      throw new TypeError("Unexpected stack!");
    }

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === SECOND) {
      result = mathBinaryOperators[item](Number(result), Number(nextItem));
    }
    return result;
  }, Number(stack[0]));
