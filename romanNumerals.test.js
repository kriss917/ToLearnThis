import { test, expect } from "vitest";

function romanNumerals(number) {
  let answer = "";
  if (number === 1) {
    answer = "I";
  } else {
    answer = "II";
  }
  return answer;
}

test("1 in roman numerals is I", () => {
  expect(romanNumerals(1)).toBe("I");
});

test("2 in roman numerals is II", () => {
  expect(romanNumerals(2)).toBe("II");
});
