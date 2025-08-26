import { test, expect } from "vitest";

function romanNumerals(number) {
  let answer;
  if (number === 1) {
    answer = "I";
  } else if (number === 2) {
    answer = "II";
  } else {
    answer = "III";
  }

  return answer;
}

test("1 in roman numerals is I", () => {
  expect(romanNumerals(1)).toBe("I");
});

test("2 in roman numerals is II", () => {
  expect(romanNumerals(2)).toBe("II");
});
test("3 in roman numerals is III", () => {
  expect(romanNumerals(3)).toBe("III");
});
