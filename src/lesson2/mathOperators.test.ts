import {
  mul,
  div,
  add,
  minus,
  pow,
  sqr,
  sin,
  cos,
  tan,
  ctan,
  rem,
  factorial,
  fibonacci,
} from "./mathOperators";

describe("mathOperators test cases", () => {
  it("mul 1 * 2 to equal 2", () => {
    expect(mul(1, 2)).toBe(2);
  });

  it("mul 2 * 2 to equal 4", () => {
    expect(mul(2, 2)).toBe(4);
  });

  it("div 2 / 2 to equal 1", () => {
    expect(div(2, 2)).toBe(1);
  });

  it("div 4 / 2 to equal 2", () => {
    expect(div(4, 2)).toBe(2);
  });

  it("add 4 + 2 to equal 6", () => {
    expect(add(4, 2)).toBe(6);
  });

  it("minus 4 - 2 to equal 2", () => {
    expect(minus(4, 2)).toBe(2);
  });

  it("pow 4 ^ 4 to equal 256", () => {
    expect(pow(4, 4)).toBe(256);
  });

  it("sqr 4 ** to equal 16", () => {
    expect(sqr(4)).toBe(16);
  });

  it("sin 0 to equal 0", () => {
    expect(sin(0)).toBe(0);
  });

  it("cos 0 to equal 1", () => {
    expect(cos(0)).toBe(1);
  });

  it("tan 0 to equal 0", () => {
    expect(tan(0)).toBe(0);
  });

  it("ctan 0 to equal Infinity", () => {
    expect(ctan(0)).toBe(Infinity);
  });

  it("fibonacci 15 to equal 610", () => {
    expect(fibonacci(15)).toBe(610);
  });

  it("factorial 4 ! to equal 24", () => {
    expect(factorial(4)).toBe(24);
  });

  it("rem 9 % 2 to equal 1", () => {
    expect(rem(9, 2)).toBe(1);
  });
});
