import { calculate } from "./utils.ts"

export function foo() {
  return calculate(1);
}

if (import.meta.vitest) {
  const { it, expect, vi } = import.meta.vitest;

  vi.mock(import("./utils.ts"), () => {
    return {
      "calculate": (x: number) => x,
    }
  })

  it("should return one", () => {
    expect(foo()).toBe(1);
  });
}
