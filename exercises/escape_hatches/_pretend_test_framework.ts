export function describe(description: string, fn: () => void): void {
  console.log(description);
  fn();
}

export function it(description: string, fn: () => void): void {
  try {
    fn();
    console.log(`  ✔ ${description}`);
  } catch (error) {
    console.log(`  ✘ ${description}`);
    console.error(error);
  }
}

export function expect<T>(actual: T) {
  return {
    toBe(expected: T) {
      if (actual !== expected) {
        throw new Error(`Expected ${actual} to be ${expected}`);
      }
    },
    toEqual(expected: T) {
      const actualJson = JSON.stringify(actual);
      const expectedJson = JSON.stringify(expected);
      if (actualJson !== expectedJson) {
        throw new Error(`Expected ${actualJson} to equal ${expectedJson}`);
      }
    },
    toThrow(expectedMessage: string) {
      let threw = false;
      try {
        (actual as unknown as () => void)();
      } catch (error) {
        threw = true;
        if (error instanceof Error) {
          if (error.message !== expectedMessage) {
            throw new Error(
              `Expected error message "${error.message}" to be "${expectedMessage}"`,
            );
          }
        } else {
          throw new Error(`Thrown value is not an Error instance`);
        }
      }
      if (!threw) {
        throw new Error(
          `Expected function to throw an error with message "${expectedMessage}", but it did not throw`,
        );
      }
    },
  };
}
