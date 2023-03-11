import { parser } from "./parser";

describe("Parser correct cases", () => {
  it("1 + 32", () => {
    expect(parser("1 + 32")).toEqual([1, "+", 32]);
  });

  it("11 + 3 * 22", () => {
    expect(parser("11 + 3 * 22")).toEqual([11, "+", 3, "*", 22]);
  });

  it("1 + 32 - 2 + 2", () => {
    expect(parser("1 + 32 - 2 + 2")).toEqual([1, "+", 32, "-", 2, "+", 2]);
  });

  // My tests
  it("sin(1)", () => {
    expect(parser("sin(1)")).toEqual([1, "sin"]);
  });

  it("cos(1)", () => {
    expect(parser("cos(1)")).toEqual([1, "cos"]);
  });

  it("tg(1)", () => {
    expect(parser("tg(1)")).toEqual([1, "tg"]);
  });

  it("ctg(1)", () => {
    expect(parser("ctg(1)")).toEqual([1, "ctg"]);
  });

  it("fib(1)", () => {
    expect(parser("fib(1)")).toEqual([1, "fib"]);
  });

  it("2 !", () => {
    expect(parser("2 !")).toEqual([2, "!"]);
  });

  it("2 **", () => {
    expect(parser("2 **")).toEqual([2, "**"]);
  });

  it("2 ^ 10", () => {
    expect(parser("2 ^ 10")).toEqual([2, "^", 10]);
  });

  it("9 % 2", () => {
    expect(parser("9 % 2")).toEqual([9, "%", 2]);
  });

  it("4 * ( 4 + 2 ) - 1", () => {
    expect(parser("4 * ( 4 + 2 )")).toEqual([4, "*", "(", 4, "+", 2, ")"]);
  });
});

describe("Parser invalid cases", () => {
  it("1 + + 33 - 2", () => {
    expect(() => parser("1 + + 33 - 2")).toThrow(
      TypeError("Unexpected string")
    );
  });

  // My tests
  it("(2 + 2) * 4", () => {
    expect(() => parser("(2 + 2)) * 4")).toThrow(
      TypeError("Unexpected string")
    );
  });
});
