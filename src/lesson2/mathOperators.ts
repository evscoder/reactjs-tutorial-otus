export type ScalarOperationType = (first: number, second: number) => number;
export type UnaryOperationType = (first: number) => number;

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

export const pow: ScalarOperationType = (
  first: number,
  second: number
): number => Math.pow(first, second);

export const rem: ScalarOperationType = (
  first: number,
  second: number
): number => first % second;

export const sqr: UnaryOperationType = (first: number): number => {
  return Math.pow(first, 2);
};

export const sin: UnaryOperationType = (first: number): number => {
  return Math.sin(first);
};

export const cos: UnaryOperationType = (first: number): number => {
  return Math.cos(first);
};

export const tan: UnaryOperationType = (first: number): number => {
  return Math.tan(first);
};

export const ctan: UnaryOperationType = (first: number): number => {
  return 1 / Math.tan(first);
};

export const factorial: UnaryOperationType = (first: number): number => {
  return first === 0 ? 1 : first * factorial(first - 1);
};

export const fibonacci: UnaryOperationType = (first: number): number => {
  if (first < 1) {
    return 0;
  }

  let a = 0;
  let b = 1;

  for (let i = 1; i < first; ++i) {
    const c = a + b;

    a = b;
    b = c;
  }

  return b;
};

export const mathBinaryOperators: { [key: string]: ScalarOperationType } = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "^": pow,
  "%": rem,
};

export const mathUnaryOperators: { [key: string]: UnaryOperationType } = {
  "**": sqr,
  "!": factorial,
  sin: sin,
  cos: cos,
  tg: tan,
  ctg: ctan,
  fib: fibonacci,
};

export const mathPriorities: number[] = [1, 2];

const [FIRST, SECOND] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "!": FIRST,
  "**": FIRST,
  "^": FIRST,
  fib: FIRST,
  sin: FIRST,
  cos: FIRST,
  tg: FIRST,
  ctg: FIRST,
  "*": FIRST,
  "/": FIRST,
  "%": FIRST,
  "+": SECOND,
  "-": SECOND,
};
