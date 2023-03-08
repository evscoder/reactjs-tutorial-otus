export type ScalarOperationType = (first: number, second: number) => number;

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

export const sqr: ScalarOperationType = (first: number): number => {
  return Math.pow(first, 2);
};

export const rem: ScalarOperationType = (
  first: number,
  second: number
): number => first % second;

export const sin: ScalarOperationType = (first: number): number => {
  return Math.sin(first);
};

export const cos: ScalarOperationType = (first: number): number => {
  return Math.cos(first);
};

export const tan: ScalarOperationType = (first: number): number => {
  return Math.tan(first);
};

export const ctan: ScalarOperationType = (first: number): number => {
  return 1 / Math.tan(first);
};

export const factorial: ScalarOperationType = (first: number): number => {
  return first === 0 ? 1 : first * factorial(first - 1, 0);
};

export const fibonacci: ScalarOperationType = (first: number) => {
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

export const mathOperators: { [key: string]: ScalarOperationType } = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "^": pow,
  "**": sqr,
  "%": rem,
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
