export type ScalarOperationType = (first: number, second: number) => number;
export type ScalarUnaryType = (first: number) => number;

export const mul: ScalarOperationType = (
  first: number,
  second: number
): number => first * second;

export const div: ScalarOperationType = (
  first: number,
  second: number
): number => first / second;

export const add: ScalarOperationType = (
  first: number,
  second: number
): number => first + second;

export const minus: ScalarOperationType = (
  first: number,
  second: number
): number => first - second;

export const sin: ScalarUnaryType = Math.sin;

export const cos: ScalarUnaryType = Math.cos;

export const tan: ScalarUnaryType = Math.tan;

export const ctg: ScalarUnaryType = (x) => 1 / Math.tan(x);

export const factorial: ScalarUnaryType = (x: number) => {
  return x == 0 ? 1 : x * factorial(x - 1);
};

export const fibonacci: ScalarUnaryType = (x: number) => {
  if (x < 1) {
    return 0;
  }

  let a = 0;
  let b = 1;

  for (let i = 1; i < x; ++i) {
    const c = a + b;

    a = b;
    b = c;
  }

  return b;
};

export const mathOperators: { [key: string]: ScalarOperationType } = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
};

export const mathPriorities: number[] = [1, 2];

const [FIRST, SECOND] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "*": FIRST,
  "/": FIRST,
  "+": SECOND,
  "-": SECOND,
};
