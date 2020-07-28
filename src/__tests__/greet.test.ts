import {greet} from "../greet";

describe(greet, () => {
  it("can greet.", () => {
    expect(greet("Mike")).toBe("Hello, Mike!");
  });
});
