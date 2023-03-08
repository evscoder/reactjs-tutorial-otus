import {
  mul,
  div,
  add,
  minus,
  pow,
  sqr,
  sin,
  cos,
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
    expect(sqr(4, 2)).toBe(16);
  });

  it("sin 1 sin to equal 0.8414709848078965", () => {
    expect(sin(1, 0)).toBe(0.8414709848078965);
  });

  it("cos 0 cos to equal 1", () => {
    expect(cos(0, 0)).toBe(1);
  });

  it("fibonacci 15 cos to equal 610", () => {
    expect(fibonacci(15, 0)).toBe(610);
  });
});
